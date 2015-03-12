angular.module("Inventory")

.controller('InventoryController', function($scope, CartService){
	var store = this;
	store.items = [];

	CartService.getItems().success(function(data){
		store.items = data;
	});

	console.log(store.items);
	$scope.add = function(item){
		CartService.add(item);
		
	};

});