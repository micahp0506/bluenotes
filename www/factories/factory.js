angular.module("factory", [])
  .factory("factory", [function () {

    var localHistory;

    localHistory = JSON.parse(localStorage.getItem("searchHistory"));
    console.log("localHistory in factory", localHistory);


    return {

      getNotes : function() {
        return localHistory;
      },

      setNotes : function(addedNote) {

        // NEED TO TURN THIS BACK IN TO A STRING TO PUSH BACK TO LOCAL STORAGE ????
        console.log("addedNote in factory", addedNote);
        localHistory = addedNote;
        console.log("updated localHistory in factory after note is added", localHistory);
      }

    }





  }]);
