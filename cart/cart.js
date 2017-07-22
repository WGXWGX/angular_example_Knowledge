var cartController = function($scope){
	// $scope.num=123;
	$scope.cart = [
		{
			id:1000,
			name:'iphone5s',
			quantity:'3',
			price:4300
		},
		{
			id:232,
			name:'mac',
			quantity:'3',
			price:23000
		},	
		{
			id:3300,
			name:'iphone5',
			quantity:'30',
			price:3300
		},
		{
			id:2000,
			name:'ipad',
			quantity:'5',
			price:6900
		}
	];
	$scope.total = function(){
		var total = 0;
		angular.forEach($scope.cart,function(item){
			var onetotal = item.quantity*item.price;
			total+=onetotal;
		});
		return total;
	};
	$scope.num = function(){
		var num = 0;
		angular.forEach($scope.cart,function(item){
			var onenum = parseInt(item.quantity);
			num+=onenum;
		});
		return num;
	};
	$scope.delete = function(id){
		var index = -1;
		angular.forEach($scope.cart,function(item,key){
			if(id == item.id){
				index=key;
			}
		});
		$scope.cart.splice(index,1);
	}
	//在控制器里定义函数只能用var，不能写$scope.什么
	var findIndex = function(id){
		var index = -1;
		angular.forEach($scope.cart,function(item,key){
			if(id == item.id){
				index=key;
			}
		});
		return index;
	}
	$scope.sub = function(id){
		var keyid = findIndex(id);
		if($scope.cart[keyid].quantity>1){
			--$scope.cart[keyid].quantity;
		}else{
			var message = confirm("是否删除该商品");
			if(message){
				$scope.delete(id);
			}
		}
		
	};
	$scope.add = function(id){
		var keyid = findIndex(id);
		++$scope.cart[keyid].quantity;
	};
	
};








