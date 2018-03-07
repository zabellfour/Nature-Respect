var fancyBox = (function($) {
    'use strict';
    // content tabs init
    function init() {

        $("[data-fancybox]").fancybox({
            infobar : false,
            toolbar : false,
            helpers:  {
                title : {
                    type : 'inside',
                    position: 'top'
                }
            },
            mobile : {
                idleTime : false,
                margin   : 0,
            },
            beforeLoad: function() {
                var caption = this.opts.$orig.attr('data-title');
                $(".fancybox-slide").html('<span class="title-video">' + caption + '</span>');
                $('.fancybox-slide').append( $('.fancybox-caption') );
            },
        });

    }

    return {
        init: init
    };

}(jQuery));

export default fancyBox;