(function(){
	var app = angular.module("shop", []);

	app.controller('InventoryController', function(){
		this.items = items;
	});

	var items = [
				{name: 'book', price: 2, quantity: 1,},
				{name: 'shirt', price: 5, quantity: 1,},
				{name: 'book', price: 2, quantity: 1,},
				{name: 'book', price: 2, quantity: 1,},
				{name: 'shirt', price: 5, quantity: 1,},
				{name: 'book', price: 2, quantity: 1,},
			
			];

})();
