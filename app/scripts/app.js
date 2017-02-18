(function () {
	function config($stateProvider, $locationProvider) {

		$locationProvider
			.html5Mode({
				enabled: true, // disables hashbang URLs 
				requireBase: false //and avoids a common location error
			});

		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeCtrl as home',
				templateUrl: '/templates/home.html'
			});
	}

	angular
		.module('blocChat', ['ui.bootstrap', 'ui.router', 'ngCookies', 'firebase'])
		.config(config);

})();