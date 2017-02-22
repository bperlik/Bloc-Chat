(function () {
	function BlocChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser'); // retrieve cookie
		if (!currentUser || currentUser === '') {
			$uibModal.open({
				templateUrl: '/templates/usernamemodal.html',
				controller: 'UserModalInstanceCtrl',
				controllerAs: 'usermodal',
				size: 'sm',
				backdrop: 'static',
				keyboard: false
			})

			this.toggleAnimation = function () {
				this.animationsEnabled = !this.animationsEnabled;
			};
		}
		//return currentUser;
	}

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();