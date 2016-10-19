angular.module('newsapp')

.controller('allNewsCtrl', function($scope, newslistService, $timeout, storageService, $ionicSlideBoxDelegate, $rootScope){
	
	$scope.sliderStatus = true;

	newslistService.reset();
		
	var storedInterest = storageService.get("interest");

	newslistService.callAllInterestAPI(storedInterest);

	$scope.interestNewsList = newslistService.getAllNews();

	$rootScope.$on('apicalldone', function() {

		console.log("API call Done");

		$ionicSlideBoxDelegate.update();
	});
	// $timeout(function() {

	// },2000);

	$scope.toggleSliderStatus = function() {

	if ($scope.sliderStatus) {

		$ionicSlideBoxDelegate.$getByHandle('news-viewer').stop();  
	}

	else {

		$ionicSlideBoxDelegate.$getByHandle('news-viewer').start(); 
	}

		$scope.sliderStatus = !$scope.sliderStatus;
	};
});