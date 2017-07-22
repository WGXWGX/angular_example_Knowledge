var myApp = angular.module('myApp',[]);
myApp.factory('Data',function(){
 	return {
 		message:'共享数据'
 	}
});
myApp.controller('firstController',function($scope,Data){
	$scope.num = Data.message;
	console.log(Data);
});
myApp.controller('secondController',function($scope,Data){
 	$scope.num = Data.message;
 	console.log(Data);
});
