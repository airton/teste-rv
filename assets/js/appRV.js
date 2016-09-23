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

		// Filter
		self.filterType = {};
		self.filterByType = filterByType;
		function filterByType(field) {
			return self.filterType[field.type] || noFilter(self.filterType);
		}

		self.filterMaterial = {};
		self.filterByMaterial = filterByMaterial;
		function filterByMaterial(field) {
			return self.filterMaterial[field.material] || noFilter(self.filterMaterial);
		}

		function noFilter(filterObj) {
			return Object.
			keys(filterObj).
			every(function (key) { return !filterObj[key]; });
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
				photo: placeholderImg,
				type: "armchair",
				material: "wood"
			},
			{
				id: 2,
				name: "Modern Gray Armchair",
				price: 550.00,
				photo: placeholderImg,
				type: "armchair",
				material: "foam"
			},
			{
				id: 3,
				name: "Light Blue Armchair",
				price: 800.00,
				photo: placeholderImg,
				type: "armchair",
				material: "foam"
			},
			{
				id: 4,
				name: "Black and Wood Armchair",
				price: 770.00,
				photo: placeholderImg,
				type: "armchair",
				material: "wood"
			}
	    ];

	    // itens cart
	    var _itensCart = [
	    	{
				id: 1,
				name: "Nexus 6",
				price: 1450.00,
				photo: placeholderImg,
				type: "wood"
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