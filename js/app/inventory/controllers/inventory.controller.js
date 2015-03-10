angular.module("Inventory")

.controller('InventoryController', function($scope, CartService){
	this.items = CartService.getItems();
	
	$scope.add = function(item){
		CartService.add(item);
		
	};

});