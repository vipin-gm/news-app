/**
 * @ngdoc function
 * @name newsapp.controller:allNewsCtrl
 * @description
 * # allNewsCtrl
 * Controller of the newsapp
 */

angular.module('newsapp')

.controller('allNewsCtrl', function($scope, newslistService, $timeout, storageService, $ionicSlideBoxDelegate, $rootScope){
console.log($rootScope);
	var NewslistService = newslistService;

	$scope.sliderStatus = true;

	NewslistService.reset();

	// [GET] The stored interest list
	var storedInterest = storageService.get("interest");

	// [GET] The stored slide time	
	var storedSlideTime = storageService.get('slideTimer');

	// [GET] The stores poll timer
	var storedPollTime = storageService.get('pollTimer');

	// Call all the API which are present in interest list
	NewslistService.callAllInterestAPI(storedInterest);

	
	// Update the slider timer
	$scope.slideTimer = (storedSlideTime*1000) || 3000;
	$ionicSlideBoxDelegate.update();
	

	// Update the poll timer
	$scope.pollTimer = storedPollTime || 600000;
	

	/**
	 * @name shuffle
	 * @description Randamise the array list
	 */
	function shuffle(array) {

		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
		}

		return array;
		}

	// Listens the apicall status and updates the ionic slider	
	$rootScope.$on('apicalldone', function() {

		var newsList = NewslistService.getAllNews();

		$scope.interestNewsList = shuffle(newsList);

		$ionicSlideBoxDelegate.loop(true);

		$ionicSlideBoxDelegate.update();

		$rootScope.$broadcast('loading:hide');

	});

	// Poll the whole results after the specified time
	// $timeout(function() {

	// 	NewslistService.reset();

	// 	var newsList = NewslistService.getAllNews();

	// 	$scope.interestNewsList = shuffle(newsList);

	// 	$ionicSlideBoxDelegate.update();
	// }, $scope.pollTimer);

	$scope.slideHasChanged = function(index) {

		// $ionicSlideBoxDelegate.next([$scope.slideTimer]);

		// console.log(index)
	}

	/**
	 * @name toggleSliderStatus
	 * @description Controls play/pause of slider
	 */	
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