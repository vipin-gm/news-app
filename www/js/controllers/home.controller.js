angular.module('newsapp') 

.controller('homeCtrl', function($scope, lastestNews, $ionicSlideBoxDelegate) {
	
	console.log("hello form home");	
	console.log(lastestNews)
	$scope.headlines = lastestNews; 

	$ionicSlideBoxDelegate.update();
});