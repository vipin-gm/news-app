angular.module('newsapp') 

.controller('homeCtrl', function($scope, $ionicSlideBoxDelegate, $timeout, newsService, $rootScope) {

	$scope.sliderStatus = true;

	$scope.headlines = newsService;

	$rootScope.$on('apicalldone', function() {

		console.log("API call Done");

		$ionicSlideBoxDelegate.update();
	});
	// $timeout(function() {

	// 	// $scope.headlines = lastestNews; 

	// 	 // $ionicSlideBoxDelegate.$getByHandle('image-viewer').update();
	// 	 $ionicSlideBoxDelegate.update();
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