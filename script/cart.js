var app = angular.module('Cart',[]);

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
			total: function(carts){
				angular.forEach(bought, function(value, key){
					
				}, purchase);
			},
			count: function(){
				return count;
			}			
		};
	});