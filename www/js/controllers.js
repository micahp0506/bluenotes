angular.module('starter.controllers', ["factory"])


.controller('AppCtrl', function($scope, $ionicModal, $timeout, $stateParams, $state, factory) {


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

    factory.setNotes(note);
    // THINK I NEED A PROMISE HERE THAT WILL CLOSE MODAL AFTER I GET THE UPDATED NOTES
    $scope.localHistory = factory.getNotes();
    $scope.modal.hide();
  };
})


.controller('PlaylistsCtrl', function($scope, $http, $stateParams, $state, factory) {


  $scope.localHistory = factory.getNotes();
  console.log($scope.localHistory);

  $scope.noteToView = $scope.localHistory[$stateParams.playlistId];

  $scope.deleteNote = function(){
    // console.log("thing", thing);
    delete $scope.localHistory[$stateParams.playlistId];
    // console.log("localHistory", $scope.noteToView);
  //target object
  // var noteIndex = $scope.localHistory.indexOf(note);
  // console.log("noteIndex", noteIndex);
  //target index aka place of item in array
  // if(noteIndex >=0)
  // thing.remove();
  // $scope.localHistory.remove(thing);
//remove the item targeted in the array.  The 1 is to target only one item not the location of the item.
  }

})


.controller('PlaylistCtrl', function($scope, $stateParams, $state) {

});







