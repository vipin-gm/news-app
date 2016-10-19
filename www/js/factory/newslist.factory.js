'use strict';

/**
 * @ngdoc service
 * @name newsapp.newslistFactory
 * @description
 * # newslistFactory
 * Factory in the newsapp.
 */

angular.module('newsapp')

.factory('newslistFactory', function($http, $rootScope) {

	var NewsList = function(properties) {

		// Data definitions
		this.news = [];
		// this.techNews = [];
		// this.sportsNews = [];
		// this.financeNews = [];
		// this.geographyNews = [];
		// this.entertainmentNews = [];

		if (!properties) {

			properties = {};
		}

		// Data
		this.apiUrl = properties.apiUrl || null;
		this.interest = properties.interest || null;
		this.source = properties.source || null;
		this.source_logo = properties.source_logo || null;

		// Flags
		this.loading = false;

		this.getResults();
	};

	NewsList.prototype.getResults = function () {

		var self = this;

		if (self.apiUrl) {

			console.log('[GETIING...] Latest News for: ' + this.interest);

			$http({

				method: 'GET',
				url: self.apiUrl

			}).then(function successCallback(response) {

					for (var i=0; i<response.data.articles.length; i++) {

						response.data.articles[i].favStatus = false;
						response.data.articles[i].type = self.interest;
						response.data.articles[i].source = self.source;
						response.data.articles[i].source_logo = self.source_logo;

						self.news.push(response.data.articles[i]);
					}

					$rootScope.$emit('apicalldone');

			}, function errorCallback(response) {

				console.log("[Error Occured]: ", response);		    		
			});
		}
	};

	return NewsList;

});