angular.module('factory', [])
.factory("factory", function() {

    function setNote(note){
      console.log("HEY I RAN");
      return currentNote = note;
    }

    function getNote(){
      return currentNote;
    }

  return {
      getNote:getNote,
      setNote:setNote
  };
});
