var tabs = (function($) {
    'use strict';
    var tabHolder = $('ul.product-list, ul.tab-nav');

    // content tabs init
    function initTabs() {
        tabHolder.tabset({
            tabLinks: 'a',
            defaultTab: false
        });
        //swiching paralax photo in other section
        var $tabSelector = $('.product-list a');
        $tabSelector.on('click', function() {
            var dataLook = $(this).attr('href').replace('#', '');
            $('.image-holder').removeClass('active');
            $('[data-' + dataLook + ']').addClass('active');
            console.log(dataLook);
        });
    }

    return {
        init: initTabs
    };

}(jQuery));

export default tabs;