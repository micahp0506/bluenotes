angular.module('starter.controllers', ["factory"])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, factory) {

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









    console.log('note', note);
    // Getting the history in local storage, if nothing exists, we create an empty array
    var noteHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    // Pushes "note" information from partial into array
    noteHistory.push(note);
    // Setting "note" information to local storage
    localStorage.setItem('searchHistory', JSON.stringify(noteHistory));

    // $scope.closeNote();

    // $scope.localHistory = JSON.parse(localStorage.getItem("searchHistory"));

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    // $timeout(function() {
    //   $scope.closeNote();
    // }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, factory) {

  // $scope.localHistory = JSON.parse(localStorage.getItem("searchHistory"));
  //console.log("localHistory", localHistory);

  $scope.localHistory = factory.getNotes();
  //console.log("returned note list in the PlaylistsCtrl in controllers", localHistory);

//   $scope.deleteNote = function(note){
//     console.log("note", note);
//     console.log("localHistory", $scope.localHistory);
//   //target object
//   var noteIndex = $scope.localHistory.indexOf(note);
//   console.log("noteIndex", noteIndex);
//   //target index aka place of item in array
// if(noteIndex >=0)
//   $scope.localHistory.remove(noteIndex, 1);
// //remove the item targeted in the array.  The 1 is to target only one item not the location of the item.
//   }


  // $scope.playlists = [

  //   // { title: 'Reggae', id: 1 },
  //   // { title: 'Chill', id: 2 },
  //   // { title: 'Dubstep', id: 3 },
  //   // { title: 'Indie', id: 4 },
  //   // { title: 'Rap', id: 5 },
  //   // { title: 'Cowbell', id: 6 }
  // ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
