var count =0,
	cart = {},
	purchase = [];

(function(){
	var app = angular.module("app", ["ngMaterial","Cart","Purchase"]);	
	
	
	

	app.controller('InventoryController', function($scope, CartService){
		this.items = items;
		$scope.CartService = CartService;
	});

	app.controller('CartController', function($scope, CartService, PurchaseService){		
		$scope.CartService = CartService;
		$scope.PurchaseService = PurchaseService;
	});

	app.controller('PurchaseController', function($scope, CartService, PurchaseService){	
		$scope.CartService = CartService;
		$scope.PurchaseService = PurchaseService;
		
	});

	//Material design theme config
	app.config(function($mdThemingProvider) {
	  $mdThemingProvider.theme('default')
	    .primaryPalette('teal')
	    .accentPalette('red');
	});

	




	var items = [				
				{id: 2, name: 'Eragon',images: 'images/eragon.jpg', price: 5000},
				{id: 3, name: 'The Two Towers',images: 'images/two-towers.jpg', price: 200},
				{id: 4, name: 'The Half Blood Prince',images: 'images/Half-Blood_Prince.jpg', price: 200},
				{id: 5, name: 'Divergent',images: 'images/divergent.jpg', price: 5000},
				{id: 6, name: 'The Chamber of Secrets',images: 'images/Chamber_of_Secrets.jpg', price: 200},
				{id: 1, name: 'Game of Thrones',images: 'images/Game_of_thrones.jpeg', price: 200},					
			];
	

})();
