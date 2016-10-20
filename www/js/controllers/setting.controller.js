/**
 * @ngdoc function
 * @name newsapp.controller:settingCtrl
 * @description
 * # settingCtrl
 * Controller of the newsapp
 */

angular.module('newsapp')

.controller('settingCtrl', function($scope, storageService, $rootScope)	{

	var StorageService = storageService;

	var storedSlideTimer = StorageService.get('slideTimer');

	var storedPollTimer = StorageService.get('pollTimer');

	$scope.timer = {

		slideTimer : storedSlideTimer || null,
		pollTimer  : storedPollTimer  || null
	};

	$scope.updateSettings = function()	{
console.log($scope.timer);
		StorageService.set('slideTimer', $scope.timer.slideTimer);

		StorageService.set('pollTimer', $scope.timer.pollTimer);
	};
})