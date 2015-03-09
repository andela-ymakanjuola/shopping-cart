var app = angular.module('Purchase',[]);

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
		},		
	};
});
