angular.module('newsapp')

.service('newsService', function($http) {
	console.log("from news service");

	var Service = {};
	var API_KEY = '6683dcf8e155464482c3fc2927e406ac'
	var apiUrl = 'https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=latest&apiKey='+API_KEY;

	console.log(apiUrl);

	Service.getLatestNews = function() {

		console.log('[GETIING...] Latest News');

		$http({

		  method: 'GET',
		  url: apiUrl

		}).then(function successCallback(response) {
		    
		    console.log(response);

		    // var popularShows = response.data.results;

		    // Service.popularSeries = response.data.results; 

		  }, function errorCallback(response) {
			
			console.log("[Error Occured]: ", response);		    		
		  });
	};
});