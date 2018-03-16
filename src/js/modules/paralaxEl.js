//function for  (paralax elments)
var diffSpeed = {
    init: function() {
        var $parallaxEl = $('.parallax-section');
        if (!$parallaxEl.length) return false;
        if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
            setTimeout(function() {
                var s = skrollr.init({
                    forceHeight: false,
                    smoothScrolling: false
                });
            }, 1000);

        }

    }
};

export default diffSpeed;