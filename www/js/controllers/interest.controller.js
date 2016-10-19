angular.module('newsapp')

.controller('interestCtrl', function($scope, newsService, storageService){

	var StorageService = storageService;

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

	// console.log($scope.interest.checked);

	$scope.toggleInterest = function(interest) {

		interest.checked = !interest.checked;

		console.log($scope.interestList);

		StorageService.set("interest", $scope.interestList);
	}
})