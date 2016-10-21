/**
 * @ngdoc function
 * @name newsapp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the newsapp
 */

angular.module('newsapp') 

.controller('homeCtrl', function($scope, $ionicSlideBoxDelegate, $timeout, newsService, $rootScope, $cordovaInAppBrowser, $cordovaSocialSharing) {

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

	/**
	 * @name openNewsInBrowser
	 * @description Open the article In App browser
	 */
	$scope.openNewsInBrowser = function(url)	{

		var options = {
			location: 'yes',
			clearcache: 'yes',
			toolbar: 'no'
		};

      	$cordovaInAppBrowser.open(url, '_self', options)
      	.then(function(event) {
        	// success
        console.log("browser opened");
      	})
      	.catch(function(event) {
        	//error
        console.log("deviceready");
      })
	};

	/**
	 * @name share
	 * @description Share the article with any available platform
	 */
	$scope.share = function ($event, title, url) {

		$event.stopPropagation()

    	$cordovaSocialSharing.share( title, 'Subject string', null, url);
	}
});