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

  $scope.deleteNote = function(note){
    //target object
    console.log("delete");
    delete $scope.localHistory[note.name]
    //this is where we are deleting the selected note from the localHistory object
    // console.log("$scope.localHistory1", $scope.localHistory);
    factory.deleteNotes($scope.localHistory);
    // console.log("$scope.localHistory2", $scope.localHistory);
    //Where we take the object where we just manipulated and store it in the factory
    $scope.localHistory = factory.getNotes();
    //this is the updated localHistory object

  }
})

.controller('PlaylistCtrl', function($scope, $stateParams, $state) {

});


// You are using localStorage as an array, while it isn't. It has default functions to remove an item:
// removeItem: function(key){
//     $window.localStorage.removeItem(key);
// }
// If you want to remove by index, you have to get the item first:
// removeByIndex: function (index) {
//     $window.localStorage.removeItem($window.localStorage.key(index));
// }




