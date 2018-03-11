//function for  (paralax elments)
var diffSpeed = {
    init: function() {
        var $parallaEl = $('.parallax-section');
        if (!$parallaEl) return;
        if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
            var s = skrollr.init({
                forceHeight: false,
                smoothScrolling: false
            });
        }

    }
};

export default diffSpeed;