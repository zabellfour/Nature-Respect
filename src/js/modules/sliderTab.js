var sliderTabs = (function ($) {
    'use strict';

    var slider = $('.slider-tab');

    // init slider
    function init() {
        slider.slick({
            nextArrow: '<span class="next"><i class="icon icon-arrow-right"></i></span>',
            prevArrow: '<span class="prev"><i class="icon icon-arrow-left"></i></span>',
            infinite: true,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '30%',
            slidesToShow: 1,
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
        init: init
    };

}(jQuery));

export default sliderTabs;