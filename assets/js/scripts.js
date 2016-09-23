(function(){
    'use strict';

    // Config
    var app = {
        body:         document.querySelector('body'),
        linkBackTop:  document.querySelector('.back-top a'),
        linkExternal: document.querySelectorAll("a[href*='http://']:not([href*='"+location.hostname+"']),[href*='https://']:not([href*='"+location.hostname+"'])"),
        header:       document.querySelector('.header'),
        navbar:       document.querySelector('.navbar'),
    };

    // Default scripts
    var initialConfig = {

        // Start functions
        init: function(){
            var self = this;
            self.externalLinks();
            self.backTop();
            self.fixNavMenu();
            self.slideshow();
        },

        // External links
        externalLinks: function() {
            [].forEach.call(app.linkExternal, function(el) {
                el.setAttribute('target', 'blank');
            });
        },

        // Back top
        backTop: function(){

            function scrollToTop(scrollDuration) {
                var scrollStep = -window.scrollY / (scrollDuration / 15),
                scrollInterval = setInterval(function(){
                    if ( window.scrollY !== 0 ) {
                        window.scrollBy( 0, scrollStep );
                    }
                    else clearInterval(scrollInterval);
                },15);
            }

            if(app.linkBackTop)

            app.linkBackTop.addEventListener('click', function(event){
                event.preventDefault();
                scrollToTop(500, 0);
            });
        },

        // Fix nav menu
        fixNavMenu: function() {
            var navPosition = app.navbar.getBoundingClientRect().top;
            window.addEventListener('scroll', function() {
                var scrollPosition = this.scrollY;
                if(scrollPosition > navPosition) {
                    app.header.classList.add('fixed');
                } else {
                    app.header.classList.remove('fixed');
                }
            });
        },

        slideshow: function(){
            setTimeout(function(){
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 4,
                    paginationClickable: true,
                    spaceBetween: 10
                });
            }, 200);
        }

    };


    initialConfig.init();

})();

