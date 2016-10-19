// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'newsapp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'newsapp.controllers' is found in controllers.js
angular.module('newsapp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.interest', {
      url: '/interest',
      views: {
        'menuContent': {
          templateUrl: 'templates/interest.html',
          controller: 'interestCtrl'
        }
      }
    })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      },
      resolve: {

      financialNews: ['newsService', function(newsService) {

        var NewsService = newsService;

        NewsService.getFinalcialTimesNews();

        return NewsService;
      }]
    }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.home', {
    cache:false,
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    },
    resolve: {

      lastestNews: ['newsService', function(newsService) {

        var NewsService = newsService;

        NewsService.getLatestNews();

        return NewsService;
      }]
    }
  })

  .state('app.financial',{
    // cache:false,
    url: '/ftnews',
    views: {
      'menuContent': {
        templateUrl: '/templates/financial.html',
        controller: 'ftCtrl'
      }
    },
    resolve: {

      financialNews: ['newsService', function(newsService) {

        var NewsService = newsService;

        NewsService.getFinalcialTimesNews();

        return NewsService;
      }]
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/interest');
});
