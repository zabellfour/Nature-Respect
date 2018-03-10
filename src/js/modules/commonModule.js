var common = {
    slideBox: function() {
        var $box = $('.accelerator-element');
        if (!$box) return;
        $box.find('.collapse-text-box').slideUp(0);
        $box.on('mouseenter click', function() {
            console.log('xiy');
            $box.not(this).find('.collapse-text-box').fadeOut(400);
            $box.removeClass('active');
            $(this).find('.collapse-text-box').fadeIn(400);
            $(this).addClass('active');
        });
    },
    //function for root drow (home page)
    rootDraw: function() {
        var svgRoot = $('#svgroot');
        if (!svgRoot.length) return;
        var $point1 = $('#svgroot  #point1'),
            $point2 = $('#svgroot #point2'),
            $doc = $(document);
        $doc.on('scroll', function() {
            //    console.log($doc.scrollTop());
            var scrPos = $doc.scrollTop() / 13;
            $point1.attr('offset', scrPos - 1 + '%');
            $point2.attr('offset', scrPos + 5 + '%');

        });
    }



};

export default common;