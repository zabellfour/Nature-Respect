var common = {
    slideBox: function() {
        var $box =$('.accelerator-element');
        if (!$box) return;
        $box.find('.collapse-text-box').slideUp(0);
        $box.on('click', function() {
            $box.not(this).find('.collapse-text-box').delay(600).slideUp(600);
            $box.removeClass('active');
            $(this).find('.collapse-text-box').slideDown(600);
            $(this).addClass('active');
        });
    },
    rootDraw:function(){
      var svgRoot = $('#svgroot');
      if (!svgRoot.length) return;
      var $point1= $('#svgroot  #point1'),
          $point2= $('#svgroot #point2'),
          $doc = $(document);
      $doc.on('scroll', function(){
        console.log($doc.scrollTop());
        var scrPos = $doc.scrollTop()/15;
        $point1.attr('offset', scrPos-1 + '%');
        $point2.attr('offset', scrPos + '%');
 
      });

    }

};

export default common;