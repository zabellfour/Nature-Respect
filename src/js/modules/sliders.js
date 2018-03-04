var sliders = {
    accSlider: function() {
        $('.accelerators-holder').owlCarousel({
          items:4,
          mouseDrag: false
        });
        $(".circle-text").each(function(index, el) {
          new CircleType(el).radius(134);
      });
    }

};

export default sliders;