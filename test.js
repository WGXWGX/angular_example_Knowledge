 // var firstController = function($scope){
// 	$scope.nums = [{id:1},{id:2},{id:3}];
// 	$scope.aa = function(){
// 		$scope.nums = [];
// 	}
// }

var myApp = angular.module('myApp',[]);
myApp.controller('firstController',function($scope){
	$scope.num = 456;
	$scope.nums = [{id:1},{id:2},{id:3}];
	$scope.aa = function(){
		$scope.nums = [];
		bb();
	}
	var bb = function(){
		alert('是否确认');
	}
});
