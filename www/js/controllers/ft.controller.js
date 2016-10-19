angular.module('newsapp') 

.controller('ftCtrl', function($scope, newsService, $ionicSlideBoxDelegate, $timeout) {

	$scope.sliderStatus = true;

	$scope.financialNew = newsService; 

	$timeout(function() {


		 // $ionicSlideBoxDelegate.$getByHandle('news-viewer').update();
		 $ionicSlideBoxDelegate.update();
	},1000);

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