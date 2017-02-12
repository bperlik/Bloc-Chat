(function () {
	function HomeCtrl($scope, Room) {
		$scope.chatRooms = Room.all;
		$scope.currentRoom = null;
		$scope.messages = null;

		$scope.open = function () {
			$uibModal.open({
				templateUrl: 'roomsModal.html',
				controller: 'ModalInstanceCtrl'
			})
		};

		$scope.setCurrentRoom = function (chatRoom) {
			$scope.currentRoom = chatRoom;
			//$scope.messages = Message.getMessages(currentRoom.$id);
		};

		return $scope.rooms;
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();