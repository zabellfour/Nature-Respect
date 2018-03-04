var sliders = {
    accSlider: function() {
        $('.accelerators-holder').owlCarousel({
          items:4,
          mouseDrag: false,
           responsive:{
        0:{
            items:1,
            nav:true
        },
      768:{
            items:2,
            nav:false
        },
       1024:{
            items:4,
            nav:true,
            loop:false
        }
    }
        });
        $(".circle-text").each(function(index, el) {
          new CircleType(el).radius(134);
      });
    }

};

export default sliders;