var menuSlider = (function ($) {
    'use strict';

    var slider = $('.slider-menu');

    if (!slider.length) return;

    // init slider
    function initSlider() {
        slider.slick({
            nextArrow: '<span class="next"><i class="icon icon-arrow-right"></i></span>',
            prevArrow: '<span class="prev"><i class="icon icon-arrow-left"></i></span>',
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });
    }

    return {
        init: initSlider
    };

}(jQuery));

export default menuSlider;