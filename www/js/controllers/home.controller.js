angular.module('newsapp') 

.controller('homeCtrl', function($scope, lastestNews, $ionicSlideBoxDelegate, $timeout) {

	$scope.sliderStatus = true;

	$timeout(function() {

		$scope.headlines = lastestNews; 

		 // $ionicSlideBoxDelegate.$getByHandle('image-viewer').update();
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

	// $ionicSlideBoxDelegate.update();
	// $ionicSlideBoxDelegate.$getByHandle('image-viewer').update();
 //    },2000)	

});