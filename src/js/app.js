// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import headerNav from './modules/mobileNav.js';
import diffSpeed from './modules/paralaxEl.js';
import common from './modules/commonModule.js';
import sliders from './modules/sliders.js';
import tabs from './modules/tab.js';
import productSlider from './modules/slickProduct.js';
import openClose from './modules/openClose.js';
import validationForm from './modules/validation.js';
import menuSlider from './modules/sliderMenu.js';
import sliderTabs from './modules/sliderTab.js';
import sliderVideo from './modules/sliderVideo.js';
import fancyBox from './modules/fancybox.js';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
      fancyBox.init();
    //init mobile navigation
    headerNav.init();

    //module for paralax elements
    diffSpeed.init();
    common.circleText();

    //init tabs
    tabs.init();

    //init sliders
    sliders.accSlider();
    productSlider.init();
    sliderTabs.init();

    //init openClose for footer mobile
    openClose.init();

    //init validation for subscription form
    validationForm.init();

    //init menuSlider
    menuSlider.init();

   //init videoSlider
    sliderVideo.init();
  });

})(jQuery);