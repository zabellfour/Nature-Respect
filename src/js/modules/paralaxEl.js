// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var diffSpeed = {
    init: function() {
      $.fn.moveIt = function(){
        var $window = $(window);
        var instances = [];
        
        $(this).each(function(){
          instances.push(new moveItItem($(this)));
        });
        
        window.addEventListener('scroll', function(){
          var scrollTop = $window.scrollTop();
          instances.forEach(function(inst){
            inst.update(scrollTop);
          });
        }, {passive: true});
      };
      
      var moveItItem = function(el){
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
      };
      
      moveItItem.prototype.update = function(scrollTop){
        this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
      };
      
      // Initialization
      $(function(){
        $('[data-scroll-speed]').moveIt();
      });
    }

};

export default diffSpeed;