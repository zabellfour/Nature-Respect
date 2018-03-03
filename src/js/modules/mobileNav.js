var headerNav = (function($) {
    'use strict';

    function InitNav() {
        var body = $('body'),
            btnClose = $('.btn-close'),
            btnOpen = $('.btn-mobile'),
            activeClass = 'open-nav',
            menu = $('#header .container');

        if(activateResizeHandler) {
            activateResizeHandler();
        }

        btnOpen.on('click', function(e) {
            e.preventDefault();
            showMenu();
        });

        btnClose.on('click', function(e) {
            e.preventDefault();
            removeMenu();
        });

        function showMenu() {
            body.addClass(activeClass);
            $(document).on('click touchstart', outsideClickHandler);
        }

        function removeMenu() {
            body.removeClass(activeClass);
            $(document).off('click touchstart', outsideClickHandler);
        }

        function outsideClickHandler(e) {
            var target = jQuery(e.target);
            if(!target.closest(menu).length && !target.closest(btnOpen).length) {
                removeMenu();
            }
        }

        function activateResizeHandler() {
            var win = $(window),
                doc = $('html'),
                resizeClass = 'resize-active',
                flag, timer;
            var removeClassHandler = function() {
                flag = false;
                doc.removeClass(resizeClass);
            };
            var resizeHandler = function() {
                if(!flag) {
                    flag = true;
                    doc.addClass(resizeClass);
                }
                clearTimeout(timer);
                timer = setTimeout(removeClassHandler, 500);
            };
            win.on('resize orientationchange', resizeHandler);
        }
    }

    return {
        init: InitNav
    };

}(jQuery));

export default headerNav;