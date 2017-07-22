var myApp = angular.module('myApp',[]);
myApp.controller('firstController',function($scope){
	$scope.num = 123;
	$scope.today = new Date();
	$scope.message = "fkhd";
	$scope.data = {
		city:[
			{
				name : 'shanghai',
				hy : '上海'
			},{
				name : 'beijing',
				hy : '北京'
			}
		]
	};
});