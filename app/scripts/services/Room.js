(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
	 var newRoomName = 'Test Room';
	 
	 rooms.$add({name: newRoomName}).then(function(ref) {
		 var id = ref.key;
		 console.log("Added room " + newRoomName);
		 rooms.$indexFor(id); //returns location of new room in array
	 });
		 	    
    return {
      all: rooms 
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
