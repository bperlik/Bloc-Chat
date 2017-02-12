(function () {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");

		var messages = firebaseRef.child('messages');
		return {
			getByRoomId: function (roomId) {
				return $firebaseArray(messages.orderByChild("roomId").equalTo(roomId));
			}
		};
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();