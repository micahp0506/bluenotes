angular.module("factory", [])
  .factory("factory", [function () {

    var localHistory;

    localHistory = JSON.parse(localStorage.getItem("searchHistory")) || {};
    console.log("localHistory in factory", localHistory);


    return {

      getNotes: function() {
        return localHistory;
      },

      setNotes: function(note) {
        // console.log("note", note);
        // Creates a new item inside the localHistory object(here in the factory)
        localHistory[note.title] = { "name": note.title,  "input" : note.input };
        // Sets the localStorage on computer to the newly created object
        localStorage.setItem('searchHistory', JSON.stringify(localHistory));
      },

      deleteNotes: function(modifiedHistory) {
        // console.log("modifiedHistory", modifiedHistory);
        // Sets localStorage to the newly modified object/without the deleted note
        localStorage.setItem('searchHistory', JSON.stringify(modifiedHistory));
        // Sets the localHistory(here in the factory) to the modifiedHistory value
        localHistory = modifiedHistory;
      }

    }





  }]);
