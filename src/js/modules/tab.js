var tabs = (function($) {
    'use strict';

    // content tabs init
    function initTabs() {
        jQuery('ul.product-list').tabset({
            tabLinks: 'a',
            defaultTab: false
        });
    }

    return {
        init: initTabs
    };

}(jQuery));

export default tabs;