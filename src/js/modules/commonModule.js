var common = {
    circleText: function() {
      var $box = $('.accelerator-element');


      $box.on('click', function(){
        
        $(this).find('.collapse-text-box').slideToggle("slow");
        
      });
    }

};

export default common;