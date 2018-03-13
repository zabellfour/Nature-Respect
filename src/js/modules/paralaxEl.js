//function for  (paralax elments)
var diffSpeed = {
    init: function() {
        var $parallaxEl = $('.parallax-section');
        console.log($parallaxEl);
        if (!$parallaxEl.length) return false;
        if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
           /* var s = skrollr.init({
                forceHeight: false,
                smoothScrolling: false
            });*/
        }

    }
};

export default diffSpeed;