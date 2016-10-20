/**
 * @ngdoc function
 * @name newsapp.controller:interestCtrl
 * @description
 * # interestCtrl
 * Controller of the newsapp
 */
 
angular.module('newsapp')

.controller('interestCtrl', function($scope, newsService, storageService, newslistService, $timeout, $state, $rootScope){

	var StorageService = storageService;

	var NewslistService = newslistService;

	var storedInterest = StorageService.get("interest");

	var interestList = [

		{topic: 'Politics', checked:false},
		{topic: 'Entertainment',checked:false},
		{topic: 'Technology',checked:false},
		{topic: 'Sports',checked:false},
		{topic: 'Financial',checked:false},
		{topic: 'Geography',checked:false}
	];

	if (storedInterest) {

		$scope.interestList = storedInterest;
	}
	else {

		$scope.interestList = interestList;
	}

	$scope.toggleInterest = function(interest) {

		interest.checked = !interest.checked;

		StorageService.set("interest", $scope.interestList);
	};

	$scope.loadContents = function() {

		// var storedInterest = StorageService.get("interest");

		// NewslistService.callAllInterestAPI(storedInterest);

		// console.log(NewslistService);

		// $timeout(function() {

		// 	console.log(NewslistService.getAllNews());
		// }, 4000);

		// $scope.interestNewsList = NewslistService.getAllNews();
	};

})