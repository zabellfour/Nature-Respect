var productSlider = (function ($) {
    'use strict';

    var slider = $('.product-slider');

    // init slider
    function initSlider() {
        slider.slick({
            nextArrow: '<span class="next"><i class="icon icon-arrow-right"></i></span>',
            prevArrow: '<span class="prev"><i class="icon icon-arrow-left"></i></span>'
        });
    }

    $(window).on('load resize', function () {
        if ($(window).width() > 767) {
            if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
            return;
        }
        if (!slider.hasClass('slick-initialized')) {
            return slider.slick({
                nextArrow: '<span class="next"><i class="icon icon-arrow-right"></i></span>',
                prevArrow: '<span class="prev"><i class="icon icon-arrow-left"></i></span>'
            });
        }
    });

    return {
        init: initSlider
    };

}(jQuery));

export default productSlider;