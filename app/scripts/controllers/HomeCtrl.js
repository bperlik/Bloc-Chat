function () {
	function HomeCtrl('$scope, Room) {	
		$scope.rooms = Room;
		return $scope.rooms;
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['$scope', HomeCtrl]);
})();