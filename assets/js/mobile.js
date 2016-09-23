// Mobile Scripts
(function(){
    'use strict';

    // Config
    var app = {
        body:           document.querySelector('body'),
        callMenu:       document.querySelector('.navbar-menu'),
        filterProducts: document.querySelector('.filter-products')
    };

    // Initial scripts
    var initialConfig = {

        // Start functions
        init: function(){
            var self = this;
            self.toggleClass();
        },

        // Click Menu
        toggleClass: function(){
            app.callMenu.addEventListener('click', initialConfig.showMenu );
            app.filterProducts.addEventListener('click', initialConfig.clickFilter );
        },

        // Show Menu
        showMenu: function(){
            app.body.classList.toggle('navbar-menu-open');
        },

        // Click Filter
        clickFilter: function(){
            if( app.filterProducts )
            app.body.classList.toggle('filter-open');
        }
    };

    // Start
    initialConfig.init();

})();
