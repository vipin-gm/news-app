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

	// Fetch results for latest news in technology
	Service.getTechNews = function() {


		var techNews1;
		var techNews2;
		var techNews3;

		var tech_source_1 = {

			apiUrl: 'https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey='+API_KEY,
			interest: 'Technology',
			source: 'Engadget',
			source_logo: 'img/engadget-logo.png'
		};

		var tech_source_2 = {

			apiUrl: ' https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey='+API_KEY,
			interest: 'Technology',
			source: 'Engadget',
			source_logo: 'img/engadget-logo.png'
		};

		var tech_source_3 = {

			apiUrl: 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey='+API_KEY,
			interest: 'Technology',
			source: 'Engadget',
			source_logo: 'img/engadget-logo.png'
		};

		techNews1 = new newslistFactory(tech_source_1);
		techNews2 = new newslistFactory(tech_source_2);
		techNews3 = new newslistFactory(tech_source_3)

		var techCollection = {

			type		: 'Technology',
			techNews1	: techNews1.news,
			techNews2	: techNews1.news,
			techNews3	: techNews1.news
		};

		News.push(techCollection);
	};

	Service.getSportsNews = function () {

		var sportsNews1;
		var sportsNews2;
		var sportsNews3;

		var sports_source_1 = {

			apiUrl: 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey='+API_KEY,
			interest: 'Sports',
			source: 'BBC Sports',
			source_logo: 'img/bbcsport-logo.png'
		};

		var sports_source_2 = {

			apiUrl: 'https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=top&apiKey='+API_KEY,
			interest: 'Sports',
			source: 'ESPN',
			source_logo: 'img/espn-logo.png'
		};

		var sports_source_3 = {

			apiUrl: 'https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey='+API_KEY,
			interest: 'Sports',
			source: 'Fox Sports',
			source_logo: 'img/foxsports-logo.png'
		};

		sportsNews1 = new newslistFactory(sports_source_1);
		sportsNews2 = new newslistFactory(sports_source_2);
		sportsNews3 = new newslistFactory(sports_source_3)

		var sportsCollection = {

			type		: 'Sports',
			sportsNews1	: sportsNews1.news,
			sportsNews2	: sportsNews2.news,
			sportsNews3	: sportsNews3.news
		};

		News.push(sportsCollection);

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
console.log(interestList[i]);
		for (var i=0; i<interestList.length; i++) {

			if (interestList[i].topic == 'Politics' && interestList[i].checked) {

				Service.getPoliticsNews();
			}

			if (interestList[i].topic == 'Entertainment' && interestList[i].checked) {

				Service.getEntertainmentNews();
			}

			if (interestList[i].topic == 'Technology' && interestList[i].checked) {

				Service.getTechNews();
			}

			if (interestList[i].topic == 'Sports' && interestList[i].checked) {

				Service.getSportsNews();
			}
		}
	};

	Service.getAllNews = function() {

		allNewsCollection.length = 0;

		newsCollection = [];

		var politicsNewsCol,
			entertainNewsCol,
			techNewsCol,
			sportsNewsCol;

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

		for (var i=0; i<News.length; i++) {

			if (News[i].type == "Technology") {

				techNewsCol = News[i].techNews1.concat(News[i].techNews2,News[i].techNews3);

				break;		
			}
		}

		for (var i=0; i<News.length; i++) {

			if (News[i].type == "Sports") {

				sportsNewsCol = News[i].sportsNews1.concat(News[i].sportsNews2,News[i].sportsNews3);

				break;		
			}
		}

		// var newsCollection = News[0].politicsNews1.concat(News[0].politicsNews2,News[0].politicsNews3);

		var fullNewsCol = newsCollection.concat(politicsNewsCol,entertainNewsCol, techNewsCol,sportsNewsCol);		

		return fullNewsCol;
	};

	// Reset the array lenght 
	Service.reset = function() {

		News.length = 0;
	};

	return Service;
})