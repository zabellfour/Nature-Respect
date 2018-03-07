var tabs = (function($) {
    'use strict';
    var tabHolder = $('ul.product-list, ul.tab-nav');

    // content tabs init
    function initTabs() {
        tabHolder.tabset({
            tabLinks: 'a',
            defaultTab: false
        });
    }

    return {
        init: initTabs
    };

}(jQuery));

export default tabs;