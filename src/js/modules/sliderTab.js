var sliderTabs = (function ($) {
    'use strict';

    var slider = $('.slider-tab');

    // init slider
    function init() {
        slider.slick({
            nextArrow: '<span class="next"><img src="assets/images/right02.png" alt="#"></span>',
            prevArrow: '<span class="prev"><img src="assets/images/left02.png" alt="#"></span>',
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: ' 30%',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        centerMode: true,
                        centerPadding: ' 10%',
                    }
                }
            ]
        });
    }

    return {
        init: init
    };

}(jQuery));

export default sliderTabs;