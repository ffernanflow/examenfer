var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // Home View
        .state('home', {
            url: '/home',
            templateUrl: 'templates/homePage.html'
        })

        // Info Vies
        .state('about', {
            url: '/about',
            templateUrl: 'templates/info.html'
        })
    
     // Info Vies
        .state('tito', {
            url: '/tito',
            templateUrl: 'templates/Futuro.html'
        })
    // Info Vies
        .state('fer', {
            url: '/fer',
            templateUrl: 'templates/MisPasatiempos.html'
        });

});
