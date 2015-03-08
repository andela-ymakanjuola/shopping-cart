(function(){
	var app = angular.module("app", []);	
	var purchase = [];
	var cart = {};
	var count =0;

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
		this.purchase = purchase;
	});

	app.factory('CartService', function(){
		
		

		return{
			get: function(){
				return cart;
			},
			add: function(item){
				if (cart[item.id]){
					cart[item.id].incart +=1;
				}
					else{
						cart[item.id] ={
							product: item,
							incart: 1,
						}
					}
				count++;
			},
			remove: function(item){
				if (cart[item.id]){
					cart[item.id].incart -=1;
					if(cart[item.id].incart ===0){
						delete cart[item.id];						
					}
					count--;
				}				
			},
			checkout: function(){
				if (window.confirm("Do you want to pay for all these items?")) {
				console.log(cart); 
				  PurchaseService.add(cart);
				}
			},
			count: function(){
				return count;
			}			
		};
	});

	app.factory('PurchaseService', function(){
		
		return{
			get: function(){
				return purchase;
			},
			add: function(carts){
				var bought = carts;				
				angular.forEach(bought, function(value, key){
					this.push(value);
				}, purchase);
				cart ={};
				count =0;
				console.log(purchase);
			},		
		};
	});
	
	var items = [
				{id: 112, name: 'Game of Thrones', price: 200},
				{id: 2, name: 'Eragon', price: 5000},
				{id: 3, name: 'The Two Towers', price: 200},
				{id: 4, name: 'The Half Blood Prince', price: 200},
				{id: 5, name: 'Divergent', price: 5000},
				{id: 6, name: 'The Chamber of Secrets', price: 200},					
			];
	

})();
