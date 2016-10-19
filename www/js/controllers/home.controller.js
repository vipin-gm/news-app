angular.module('newsapp') 

.controller('homeCtrl', function($scope, $ionicSlideBoxDelegate, $timeout, newsService) {

	$scope.sliderStatus = true;

	$scope.headlines = newsService;

	$timeout(function() {

		// $scope.headlines = lastestNews; 

		 // $ionicSlideBoxDelegate.$getByHandle('image-viewer').update();
		 $ionicSlideBoxDelegate.update();
	},2000);

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