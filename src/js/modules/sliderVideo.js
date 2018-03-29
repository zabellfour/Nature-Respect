var sliderVideo = (function ($) {
    'use strict';

    var slider = $('.slider-video');

    // init slider
    function init() {
        slider.slick({
            nextArrow: '<span class="next"><img src="/content/themes/natureetrespect/assets/images/right.png" alt="#"></span>',
            prevArrow: '<span class="prev"><img src="/content/themes/natureetrespect/assets/images/left.png" alt="#"></span>',
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 2,
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

export default sliderVideo;