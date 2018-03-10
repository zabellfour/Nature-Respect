//function for dofferent scroll speed (paralax elments)
var diffSpeed = {
    init: function() {
        $.fn.moveIt = function() {
            var $window = $(window);
            var instances = [];

            $(this).each(function() {
                instances.push(new moveItItem($(this)));
            });

            window.addEventListener('scroll', function() {
                var scrollTop = $window.scrollTop();
                instances.forEach(function(inst) {
                    inst.update(1);

                });
            }, { passive: true });
        };

        var moveItItem = function(el) {
            this.el = $(el);
            this.speed = parseInt(this.el.attr('data-scroll-speed'));
        };

        moveItItem.prototype.update = function(scrollTop) {

            if ($(this.el).isInViewport()) {
                this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
            }

        };

        $.fn.isInViewport = function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };


        // Initialization
        $(function() {
            $('[data-scroll-speed]').moveIt();
        });
    }

};

export default diffSpeed;