/*
 * jQuery SlideShow plugin
 */
;(function($){
    function FadeGallery(options) {
        this.options = $.extend({
            slides: 'ul.slideset > li',
            activeClass:'active',
            disabledClass:'disabled',
            btnPrev: 'a.btn-prev',
            btnNext: 'a.btn-next',
            generatePagination: false,
            pagerList: '<ul>',
            pagerListItem: '<li><a href="#"></a></li>',
            pagerListItemText: 'a',
            pagerLinks: '.pagination li',
            currentNumber: 'span.current-num',
            totalNumber: 'span.total-num',
            btnPlay: '.btn-play',
            btnPause: '.btn-pause',
            btnPlayPause: '.btn-play-pause',
            galleryReadyClass: 'gallery-js-ready',
            autorotationActiveClass: 'autorotation-active',
            autorotationDisabledClass: 'autorotation-disabled',
            autorotationStopAfterClick: false,
            circularRotation: true,
            switchSimultaneously: true,
            disableWhileAnimating: false,
            disableFadeIE: false,
            autoRotation: false,
            pauseOnHover: true,
            autoHeight: false,
            useSwipe: false,
            swipeThreshold: 15,
            switchTime: 4000,
            animSpeed: 600,
            event:'click'
        }, options);
        this.init();
    }
    FadeGallery.prototype = {
        init: function() {
            if(this.options.holder) {
                this.findElements();
                this.attachEvents();
                this.refreshState(true);
                this.autoRotate();
                this.makeCallback('onInit', this);
            }
        },
        findElements: function() {
            // control elements
            this.gallery = $(this.options.holder).addClass(this.options.galleryReadyClass);
            this.slides = this.gallery.find(this.options.slides);
            this.slidesHolder = this.slides.eq(0).parent();
            this.stepsCount = this.slides.length;
            this.btnPrev = this.gallery.find(this.options.btnPrev);
            this.btnNext = this.gallery.find(this.options.btnNext);
            this.currentIndex = 0;

            // disable fade effect in old IE
            if(this.options.disableFadeIE && !$.support.opacity) {
                this.options.animSpeed = 0;
            }

            // create gallery pagination
            if(typeof this.options.generatePagination === 'string') {
                this.pagerHolder = this.gallery.find(this.options.generatePagination).empty();
                this.pagerList = $(this.options.pagerList).appendTo(this.pagerHolder);
                for(var i = 0; i < this.stepsCount; i++) {
                    $(this.options.pagerListItem).appendTo(this.pagerList).find(this.options.pagerListItemText).text(i+1);
                }
                this.pagerLinks = this.pagerList.children();
            } else {
                this.pagerLinks = this.gallery.find(this.options.pagerLinks);
            }

            // get start index
            var activeSlide = this.slides.filter('.'+this.options.activeClass);
            if(activeSlide.length) {
                this.currentIndex = this.slides.index(activeSlide);
            }
            this.prevIndex = this.currentIndex;

            // autorotation control buttons
            this.btnPlay = this.gallery.find(this.options.btnPlay);
            this.btnPause = this.gallery.find(this.options.btnPause);
            this.btnPlayPause = this.gallery.find(this.options.btnPlayPause);

            // misc elements
            this.curNum = this.gallery.find(this.options.currentNumber);
            this.allNum = this.gallery.find(this.options.totalNumber);

            // handle flexible layout
            this.slides.css({display:'block',opacity:0}).eq(this.currentIndex).css({
                opacity:''
            });
        },
        attachEvents: function() {
            var self = this;

            // flexible layout handler
            this.resizeHandler = function() {
                self.onWindowResize();
            };
            $(window).bind('load resize orientationchange', this.resizeHandler);

            if(this.btnPrev.length) {
                this.btnPrevHandler = function(e){
                    e.preventDefault();
                    self.prevSlide();
                    if(self.options.autorotationStopAfterClick) {
                        self.stopRotation();
                    }
                };
                this.btnPrev.bind(this.options.event, this.btnPrevHandler);
            }
            if(this.btnNext.length) {
                this.btnNextHandler = function(e) {
                    e.preventDefault();
                    self.nextSlide();
                    if(self.options.autorotationStopAfterClick) {
                        self.stopRotation();
                    }
                };
                this.btnNext.bind(this.options.event, this.btnNextHandler);
            }
            if(this.pagerLinks.length) {
                this.pagerLinksHandler = function(e) {
                    e.preventDefault();
                    self.numSlide(self.pagerLinks.index(e.currentTarget));
                    if(self.options.autorotationStopAfterClick) {
                        self.stopRotation();
                    }
                };
                this.pagerLinks.bind(self.options.event, this.pagerLinksHandler);
            }

            // autorotation buttons handler
            if(this.btnPlay.length) {
                this.btnPlayHandler = function(e) {
                    e.preventDefault();
                    self.startRotation();
                };
                this.btnPlay.bind(this.options.event, this.btnPlayHandler);
            }
            if(this.btnPause.length) {
                this.btnPauseHandler = function(e) {
                    e.preventDefault();
                    self.stopRotation();
                };
                this.btnPause.bind(this.options.event, this.btnPauseHandler);
            }
            if(this.btnPlayPause.length) {
                this.btnPlayPauseHandler = function(e){
                    e.preventDefault();
                    if(!self.gallery.hasClass(self.options.autorotationActiveClass)) {
                        self.startRotation();
                    } else {
                        self.stopRotation();
                    }
                };
                this.btnPlayPause.bind(this.options.event, this.btnPlayPauseHandler);
            }

            // swipe gestures handler
            if(this.options.useSwipe && window.Hammer && isTouchDevice) {
                this.swipeHandler = new Hammer.Manager(this.gallery[0]);
                this.swipeHandler.add(new Hammer.Swipe({
                    direction: Hammer.DIRECTION_HORIZONTAL,
                    threshold: self.options.swipeThreshold
                }));
                this.swipeHandler.on('swipeleft', function() {
                    self.nextSlide();
                }).on('swiperight', function() {
                    self.prevSlide();
                });
            }

            // pause on hover handling
            if(this.options.pauseOnHover) {
                this.hoverHandler = function() {
                    if(self.options.autoRotation) {
                        self.galleryHover = true;
                        self.pauseRotation();
                    }
                };
                this.leaveHandler = function() {
                    if(self.options.autoRotation) {
                        self.galleryHover = false;
                        self.resumeRotation();
                    }
                };
                this.gallery.bind({mouseenter: this.hoverHandler, mouseleave: this.leaveHandler});
            }
        },
        onWindowResize: function(){
            if(this.options.autoHeight) {
                this.slidesHolder.css({height: this.slides.eq(this.currentIndex).outerHeight(true) });
            }
        },
        prevSlide: function() {
            if(!(this.options.disableWhileAnimating && this.galleryAnimating)) {
                this.prevIndex = this.currentIndex;
                if(this.currentIndex > 0) {
                    this.currentIndex--;
                    this.switchSlide();
                } else if(this.options.circularRotation) {
                    this.currentIndex = this.stepsCount - 1;
                    this.switchSlide();
                }
            }
        },
        nextSlide: function(fromAutoRotation) {
            if(!(this.options.disableWhileAnimating && this.galleryAnimating)) {
                this.prevIndex = this.currentIndex;
                if(this.currentIndex < this.stepsCount - 1) {
                    this.currentIndex++;
                    this.switchSlide();
                } else if(this.options.circularRotation || fromAutoRotation === true) {
                    this.currentIndex = 0;
                    this.switchSlide();
                }
            }
        },
        numSlide: function(c) {
            if(this.currentIndex != c) {
                this.prevIndex = this.currentIndex;
                this.currentIndex = c;
                this.switchSlide();
            }
        },
        switchSlide: function() {
            var self = this;
            if(this.slides.length > 1) {
                this.galleryAnimating = true;
                if(!this.options.animSpeed) {
                    this.slides.eq(this.prevIndex).css({opacity:0});
                } else {
                    this.slides.eq(this.prevIndex).stop().animate({opacity:0},{duration: this.options.animSpeed});
                }

                this.switchNext = function() {
                    if(!self.options.animSpeed) {
                        self.slides.eq(self.currentIndex).css({opacity:''});
                    } else {
                        self.slides.eq(self.currentIndex).stop().animate({opacity:1},{duration: self.options.animSpeed});
                    }
                    clearTimeout(this.nextTimer);
                    this.nextTimer = setTimeout(function() {
                        self.slides.eq(self.currentIndex).css({opacity:''});
                        self.galleryAnimating = false;
                        self.autoRotate();

                        // onchange callback
                        self.makeCallback('onChange', self);
                    }, self.options.animSpeed);
                };

                if(this.options.switchSimultaneously) {
                    self.switchNext();
                } else {
                    clearTimeout(this.switchTimer);
                    this.switchTimer = setTimeout(function(){
                        self.switchNext();
                    }, this.options.animSpeed);
                }
                this.refreshState();

                // onchange callback
                this.makeCallback('onBeforeChange', this);
            }
        },
        refreshState: function(initial) {
            this.slides.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass);
            this.pagerLinks.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass);
            this.curNum.html(this.currentIndex+1);
            this.allNum.html(this.stepsCount);

            // initial refresh
            if(this.options.autoHeight) {
                if(initial) {
                    this.slidesHolder.css({height: this.slides.eq(this.currentIndex).outerHeight(true) });
                } else {
                    this.slidesHolder.stop().animate({height: this.slides.eq(this.currentIndex).outerHeight(true)}, {duration: this.options.animSpeed});
                }
            }

            // disabled state
            if(!this.options.circularRotation) {
                this.btnPrev.add(this.btnNext).removeClass(this.options.disabledClass);
                if(this.currentIndex === 0) this.btnPrev.addClass(this.options.disabledClass);
                if(this.currentIndex === this.stepsCount - 1) this.btnNext.addClass(this.options.disabledClass);
            }

            // add class if not enough slides
            this.gallery.toggleClass('not-enough-slides', this.stepsCount === 1);
        },
        startRotation: function() {
            this.options.autoRotation = true;
            this.galleryHover = false;
            this.autoRotationStopped = false;
            this.resumeRotation();
        },
        stopRotation: function() {
            this.galleryHover = true;
            this.autoRotationStopped = true;
            this.pauseRotation();
        },
        pauseRotation: function() {
            this.gallery.addClass(this.options.autorotationDisabledClass);
            this.gallery.removeClass(this.options.autorotationActiveClass);
            clearTimeout(this.timer);
        },
        resumeRotation: function() {
            if(!this.autoRotationStopped) {
                this.gallery.addClass(this.options.autorotationActiveClass);
                this.gallery.removeClass(this.options.autorotationDisabledClass);
                this.autoRotate();
            }
        },
        autoRotate: function() {
            var self = this;
            clearTimeout(this.timer);
            if(this.options.autoRotation && !this.galleryHover && !this.autoRotationStopped) {
                this.gallery.addClass(this.options.autorotationActiveClass);
                this.timer = setTimeout(function(){
                    self.nextSlide(true);
                }, this.options.switchTime);
            } else {
                this.pauseRotation();
            }
        },
        makeCallback: function(name) {
            if(typeof this.options[name] === 'function') {
                var args = Array.prototype.slice.call(arguments);
                args.shift();
                this.options[name].apply(this, args);
            }
        },
        destroy: function() {
            // navigation buttons handler
            this.btnPrev.unbind(this.options.event, this.btnPrevHandler);
            this.btnNext.unbind(this.options.event, this.btnNextHandler);
            this.pagerLinks.unbind(this.options.event, this.pagerLinksHandler);
            $(window).unbind('load resize orientationchange', this.resizeHandler);

            // remove autorotation handlers
            this.stopRotation();
            this.btnPlay.unbind(this.options.event, this.btnPlayHandler);
            this.btnPause.unbind(this.options.event, this.btnPauseHandler);
            this.btnPlayPause.unbind(this.options.event, this.btnPlayPauseHandler);
            this.gallery.unbind('mouseenter', this.hoverHandler);
            this.gallery.unbind('mouseleave', this.leaveHandler);

            // remove swipe handler if used
            if(this.swipeHandler) {
                this.swipeHandler.destroy();
            }
            if(typeof this.options.generatePagination === 'string') {
                this.pagerHolder.empty();
            }

            // remove unneeded classes and styles
            var unneededClasses = [this.options.galleryReadyClass, this.options.autorotationActiveClass, this.options.autorotationDisabledClass];
            this.gallery.removeClass(unneededClasses.join(' '));
            this.slidesHolder.add(this.slides).removeAttr('style');
        }
    };

    // detect device type
    var isTouchDevice = /Windows Phone/.test(navigator.userAgent) || ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

    // jquery plugin
    $.fn.fadeGallery = function(opt){
        return this.each(function(){
            $(this).data('FadeGallery', new FadeGallery($.extend(opt,{holder:this})));
        });
    };
}(jQuery));