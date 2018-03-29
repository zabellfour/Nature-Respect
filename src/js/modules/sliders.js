var sliders = {
    accSlider: function() {
        $('.accelerators-holder').owlCarousel({
          items:4,
          mouseDrag: false,
          dots:false,
          nav:true,
           responsive:{
        0:{
            items:1,
            nav:true
        },
       768:{
            items:2,
      
        },
       1024:{
            items:4,
          
        }
    }
        });
        $(".circle-text").each(function(index, el) {
          new CircleType(el).radius(134);
      });
      $(".discoverSpecial").each(function (index, el) {
        new CircleType(el).radius(210);
    });
    }

};

export default sliders;