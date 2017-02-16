(function () {
	function Message($firebaseArray) {
		var allmessagesRef = firebase.database().ref().child("messages");

		return {
			getByRoomId: function (roomId) {
				console.log('Passed RoomId: ' + roomId);
				console.log($firebaseArray(allmessagesRef));
				return $firebaseArray(allmessagesRef.orderByChild("roomId").equalTo(roomId));
			}
		};
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();


//.orderByChild("roomId").equalTo(roomId)

/*
example database Object in messages 
$id: "-Kc_08KBBrwc3nL0Q4_w"
$priority: null
content: ""This is another message."
sentAt: "Tue Feb 15 2017 08:57:03 GMT 0900 EDT"
username: "Jack B Nimble"
*/