angular.module('newsapp')

.controller('testCtrl', function($scope, newsService){
	console.log("testCtrl");
console.log(newsService);
	$scope.testData = newsService;
})