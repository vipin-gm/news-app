angular.module('newsapp')

.service('newslistService', function(newslistFactory, $timeout){

	var NewslistFactory = newslistFactory;

	var API_KEY = '6683dcf8e155464482c3fc2927e406ac';

	var Service = {};

	var News = [];

	var allNewsCollection = [];

	var testArray = [];

	Service.getPoliticsNews = function() {

		var politicsNews1;
		var politicsNews2;
		var politicsNews3;

		var politics_source_1 = {

			apiUrl: 'https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=latest&apiKey='+API_KEY,
			interest: 'Politics',
			source: 'Times of India',
			source_logo: 'img/toi-news.png'
		};

		var politics_source_2 = {

			apiUrl: 'https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey='+API_KEY,
			interest: 'Politics',
			source: 'The Hindu',
			source_logo: 'img/hindu-logo.png'
		};

		var politics_source_3 = {

			apiUrl: 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey='+API_KEY,
			interest: 'Politics',
			source: 'BBC News',
			source_logo:'img/bbc-logo.png'
		};

		politicsNews1 = new newslistFactory(politics_source_1);
		politicsNews2 = new newslistFactory(politics_source_2);
		politicsNews3 = new newslistFactory(politics_source_3)

		var politicsCollection = {

			type			: 'Politics',
			politicsNews1	: politicsNews1.news,
			politicsNews2	: politicsNews2.news,
			politicsNews3	: politicsNews3.news
		};

		News.push(politicsCollection);
	};

	Service.getTechNews = function() {

	};

	Service.getSportsNews = function () {

	};

	Service.getFinanceNews = function() {

	};

	Service.getGeographyNews = function() {

	};

	Service.getEntertainmentNews = function () {

		var entertainmentNews1,
			entertainmentNews2,
			entertainmentNews3;

		var entertainment_source_1 = {

			apiUrl: 'https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey='+API_KEY,
			interest: 'Entertainment',
			source: 'Buzzfeed',
			source_logo:'img/buzzfeed-logo.png'
		};

		var entertainment_source_2 = {

			apiUrl: 'https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey='+API_KEY,
			interest: 'Entertainment',
			source: 'Entertainment Weekly',
			source_logo:'img/ent_week_logo.png'
		};

		var entertainment_source_3 = {

			apiUrl: 'https://newsapi.org/v1/articles?source=mashable&sortBy=top&apiKey='+API_KEY,
			interest: 'Entertainment',
			source: 'Mashable',
			source_logo:'img/mashable-logo.png'
		};

		entertainmentNews1 = new newslistFactory(entertainment_source_1);
		entertainmentNews2 = new newslistFactory(entertainment_source_2);
		entertainmentNews3 = new newslistFactory(entertainment_source_3);

		var entertainCollection = {

			type: 'Entertainment',
			entertainmentNews1 : entertainmentNews1.news,
			entertainmentNews2 : entertainmentNews2.news,
			entertainmentNews3 : entertainmentNews3.news
		};


		News.push(entertainCollection);
	};

	Service.callAllInterestAPI = function(interestList) {

		for (var i=0; i<interestList.length; i++) {

			if (interestList[i].topic == 'Politics' && interestList[i].checked) {

				Service.getPoliticsNews();
			}

			if (interestList[i].topic == 'Entertainment' && interestList[i].checked) {

				Service.getEntertainmentNews();
			}
		}
	};

	Service.getAllNews = function() {

		allNewsCollection.length = 0;

		var politicsNewsCol,
		entertainNewsCol;

		for (var i=0; i<News.length; i++) {

			if (News[i].type == "Politics") {

				politicsNewsCol = News[i].politicsNews1.concat(News[i].politicsNews2,News[i].politicsNews3);

				break;		
			}
		}


		for (var i=0; i<News.length; i++) {

			if (News[i].type == "Entertainment") {

				entertainNewsCol = News[i].entertainmentNews1.concat(News[i].entertainmentNews2,News[i].entertainmentNews3);

				break;		
			}
		}



		// var newsCollection = News[0].politicsNews1.concat(News[0].politicsNews2,News[0].politicsNews3);

		var newsCollection = politicsNewsCol.concat(entertainNewsCol);		
console.log("newsCollection>>>>>>>>>",newsCollection);
		return newsCollection;
	};

	Service.reset = function() {

		News.length = 0;
	};

	return Service;
})