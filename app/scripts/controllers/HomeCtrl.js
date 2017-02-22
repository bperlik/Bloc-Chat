(function () {
	function HomeCtrl($scope, $cookies, Room, Message) {
		$scope.chatRooms = Room.all;
		$scope.currentRoom = null;
		$scope.messages = null;
		$scope.currentUser = '';

		$scope.open = function () {
			$uibModal.open({
				templateUrl: 'roomsModal.html',
				controller: 'ModalInstanceCtrl'
			})
		};

		$scope.setCurrentRoom = function (room) {
			$scope.currentRoom = room;
			$scope.currentUser = $cookies.get('blocChatCurrentUser'); // retrieve cookie

			console.log("Current Room ID: " + $scope.currentRoom.$id);
			console.log("Current user: " + $scope.currentUser);
			$scope.messages = Message.getByRoomId(room.$id);
		};

		$scope.sendMessage = function (room) {
			Message.send($scope.newMessage, room.$id, $scope.currentUser);
		};

		return $scope.chatRooms;

	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['$scope', '$cookies', 'Room', 'Message', HomeCtrl]);
})();