var sliderTab = (function($) {
    'use strict';

    // fade gallery init
    function initSlideShow() {
        jQuery('div.slideshow').fadeGallery({
            slides: 'div.slide',
            btnPrev: 'a.btn-prev',
            btnNext: 'a.btn-next',
            pagerLinks: '.pagination li',
            event: 'click',
            autoRotation: false,
            switchTime: 3000,
            animSpeed: 500
        });
    }

    return {
        init: initSlideShow
    };

}(jQuery));

export default sliderTab;