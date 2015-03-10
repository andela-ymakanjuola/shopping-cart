angular.module("Inventory")

.directive("inventoryContent", function(){
	return{
		restrict: 'E',
		templateUrl: 'inventory/partial/inventory-content.html'
	};

});