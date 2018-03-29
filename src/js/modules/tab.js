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
            $('.productsBtn').attr('href', '/products/?slug='+dataLook);
            $('.image-holder').removeClass('active');
            $('[data-' + dataLook + ']').addClass('active');
        });
    }

    return {
        init: initTabs
    };

}(jQuery));

export default tabs;