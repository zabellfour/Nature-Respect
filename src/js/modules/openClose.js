var openClose = (function ($) {
    'use strict';

    var elem = $('.open-close');

    if (!elem.length) return;

    function init() {
        elem.openClose({
            activeClass: 'active',
            opener: '.opener-menu',
            slider: '.slide',
            animSpeed: 400,
            effect: 'slide'
        });
    }

    return {
        init: init
    };

}(jQuery));

export default openClose;