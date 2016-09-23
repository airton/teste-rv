(function(){
    'use strict';

    // appRV
    var appRV = angular.module("appRV",[]);

    // Ctrl
    appRV.controller("appRVCtrl", ['getProducts', function(getProducts){
        var self = this;

        self.name = "airton";

        // Products
        self.products = getProducts.getProducts();

        // Cart
        self.cart = getProducts.getCart();

        // Add item Cart
        //self.addItem = getProducts.addItem();

        // Filter Type
        self.filterType = {};
        self.filterByType = filterByType;
        function filterByType(field) {
            return self.filterType[field.type] || noFilter(self.filterType);
        }

        // Filter Material
        self.filterMaterial = {};
        self.filterByMaterial = filterByMaterial;
        function filterByMaterial(field) {
            return self.filterMaterial[field.material] || noFilter(self.filterMaterial);
        }

        // No filter
        function noFilter(filterObj) {

            if (typeof Swiper == 'function') {
                slideshow();
            }

            return Object.keys(filterObj).every(function (key) { return !filterObj[key]; });
        }

        // Slideshow start
        function slideshow(){

            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 4,
                paginationClickable: true,
                spaceBetween: 10,
                onInit: function(swiper){
                    console.log(swiper);
                }
            });
        }
    }]);

    // Factory
    appRV.factory("getProducts", [function(){

        // Placeholder
        var placeholderImg = 'http://fakeimg.pl/250x100/';

        // itens Product
        var _itensProducts = [
            {
                id: 1,
                name: "Modern Black Armchair",
                price: 350.00,
                photo: "build/img/modern-black.jpg",
                category: "new",
                type: "armchair",
                material: "wood"
            },
            {
                id: 2,
                name: "Modern Gray Armchair",
                price: 550.00,
                photo: "build/img/modern-gray.jpg",
                category: "new",
                type: "armchair",
                material: "foam"
            },
            {
                id: 3,
                name: "Light Blue Armchair",
                price: 800.00,
                photo: "build/img/light-blue.jpg",
                category: "new",
                type: "armchair",
                material: "foam"
            },
            {
                id: 4,
                name: "Black and Wood Armchair",
                price: 770.00,
                photo: "build/img/black-and-wood.jpg",
                category: "new",
                type: "armchair",
                material: "wood"
            },
            {
                id: 5,
                name: "Wood Design Chair",
                price: 770.00,
                photo: "build/img/wood-design.jpg",
                category: "best",
                type: "chair",
                material: "wood"
            },
            {
                id: 6,
                name: "Premium Design Chair",
                price: 150.00,
                photo: "build/img/premium-design.jpg",
                category: "best",
                type: "chair",
                material: "foam"
            },
            {
                id: 7,
                name: "White and Wood Chair",
                price: 250.80,
                photo: "build/img/white-and-wood.jpg",
                category: "best",
                type: "chair",
                material: "wood"
            },
            {
                id: 8,
                name: "Black and Wood Chair",
                price: 250.80,
                photo: "build/img/black-and-wood.jpg",
                category: "best",
                type: "chair",
                material: "wood"
            },
            {
                id: 9,
                name: "Black and Wood Chair",
                price: 600.00,
                photo: "build/img/black-and-wood.jpg",
                category: "new",
                type: "armchair",
                material: "foam"
            },
            {
                id: 10,
                name: "White and Wood Chair",
                price: 470.00,
                photo: "build/img/white-and-wood.jpg",
                category: "best",
                type: "chair",
                material: "foam"
            }
        ];

        // itens cart
        var _itensCart = [
            {
                id: 1,
                name: "Nexus 6",
                price: 1450.00,
                photo: "build/img/modern-black.jpg",
                type: "armchair",
                material: "wood"
            }
        ];


        var _getProdutcs = function(){
            return _itensProducts;
        };

        var _getCart = function(){
            return _itensCart;
        };

        var lastId = 4;

        var _addItem = function(newItem){
            console.log(newItem);
            newItem = angular.extend(newItem, {
                id: lastId + 1,
                photo: placeholderImg
            });

            _itensCart.push(newItem);
            lastId += 1;
        };

        function addItem(newItem) {

        }

        return{
            getProducts: _getProdutcs,
            getCart: _getCart,
            addItem: _addItem,
        };
    }]);
})();
