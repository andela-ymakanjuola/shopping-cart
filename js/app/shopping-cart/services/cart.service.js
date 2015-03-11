angular.module('ShoppingCart')

.factory('CartService', function(){		
	var items = [				
		{id: 2, name: 'Eragon',images: 'images/eragon.jpg', price: 5000},
		{id: 3, name: 'The Two Towers',images: 'images/two-towers.jpg', price: 200},
		{id: 4, name: 'The Half Blood Prince',images: 'images/Half-Blood_Prince.jpg', price: 200},
		{id: 5, name: 'Divergent',images: 'images/divergent.jpg', price: 5000},
		{id: 6, name: 'The Chamber of Secrets',images: 'images/Chamber_of_Secrets.jpg', price: 200},
		{id: 1, name: 'Game of Thrones',images: 'images/Game_of_thrones.jpeg', price: 200},					
	];

	var count =0;
	var cart = {};
	

	return{
		get: function(){
			return cart;		
		},

		getItems: function(){
			return items;
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
		total: function(carts){
			angular.forEach(bought, function(value, key){
				
			}, purchase);
		},
		count: function(){
			return count;
		},	
		reset: function(){
			cart ={};
			count = 0;
		}		
	};
})