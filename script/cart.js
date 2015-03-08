app.factory('CartService', function(){
	var cart = {};
	var count = 0;

	return{
		get: function(){
			return cart;
		},
		add: function(item){
			if (cart[item.id]){
				cart[item.id].quantity +=1;
			}
				else{
					cart[item.id] ={
						type: item,
						quantity: 1
					}
				}
			count++;
		},
		remove: function(item){
			delete cart[item.id];

		}
		count

	};
});