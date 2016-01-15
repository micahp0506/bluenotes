angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $stateParams, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/newnote.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeNote = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.newNote = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.saveNote = function(note) {
    console.log('note', note);
    // Getting the history in local storage, if nothing exists, we create an empty array
    var noteHistory = JSON.parse(localStorage.getItem('searchHistory')) || {};

    noteHistory[note.title] = { "name": note.title,  "input" : note.input }
    // Pushes "note" information from partial into array
    //noteHistory.push(note);
    // Setting "note" information to local storage
    localStorage.setItem('searchHistory', JSON.stringify(noteHistory));

    $scope.closeNote();

    $scope.localHistory = JSON.parse(localStorage.getItem("searchHistory"));
    console.log($scope.localHistory)
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    // $timeout(function() {
    //   $scope.closeNote();
    // }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $http, $stateParams, $state) {

  $scope.localHistory = JSON.parse(localStorage.getItem("searchHistory"));
  console.log("localHistory", $scope.localHistory);
  console.log($stateParams.playlistId);
  // $scope.getNote = function(){
  //   console.log('---->', $stateParams.playlistId);
    // console.log("thing", thing);
    // var thisNote = thing;

    $scope.noteToView = $scope.localHistory[$stateParams.playlistId];
  // }

  // $scope.playlists = [

  //   // { title: 'Reggae', id: 1 },
  //   // { title: 'Chill', id: 2 },
  //   // { title: 'Dubstep', id: 3 },
  //   // { title: 'Indie', id: 4 },
  //   // { title: 'Rap', id: 5 },
  //   // { title: 'Cowbell', id: 6 }
  // ];
})

.controller('PlaylistCtrl', function($scope, $stateParams, $state) {
  console.log("thing", thing);
});





