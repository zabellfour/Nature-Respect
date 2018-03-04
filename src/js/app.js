// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import headerNav from './modules/mobileNav.js';

import diffSpeed from './modules/paralaxEl.js';
import common from './modules/commonModule.js';
import sliders from './modules/sliders.js';
import tabs from './modules/tab.js';
import  productSlider from './modules/slick.js';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    headerNav.init();



    //module for paralax elements
    diffSpeed.init();
    common.circleText();
    sliders.accSlider();


    tabs.init();
    productSlider.init();

  });

})(jQuery);