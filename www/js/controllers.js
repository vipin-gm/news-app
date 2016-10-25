angular.module('newsapp')

.controller('AppCtrl', function($scope, $ionicModal, $timeout, newsService, $cordovaStatusbar) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  // newsService.init();
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.onDoubleTap = function() {

    console.log("Doble taped");

    var isVisible = $cordovaStatusbar.isVisible();

    if (isVisible) {

      $cordovaStatusbar.hide();
    }

    else {

      $cordovaStatusbar.show(); 
    }
  };
})

.controller('PlaylistsCtrl', function($scope, newsService, $timeout, $ionicSlideBoxDelegate, financialNews, $rootScope, $cordovaInAppBrowser, $cordovaSocialSharing) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  $scope.testData = financialNews;
  $scope.sliderStatus = true;

  $rootScope.$on('apicalldone', function() {

    console.log("API call Done");

    $ionicSlideBoxDelegate.update();
  });
  

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
  $scope.openNewsInBrowser = function(url)  {

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
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
