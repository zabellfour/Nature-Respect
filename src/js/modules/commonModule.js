var common = {
    circleText: function() {
      var $box = $('.accelerator-element');
      $box.find('.collapse-text-box').slideUp(0);
      $box.on('click', function(){
        
          $box.not(this).find('.collapse-text-box').delay(600).slideUp(600);
          $box.removeClass('active');
        $(this).find('.collapse-text-box').slideDown(600);
        $(this).addClass('active');
      });
    }

};

export default common;