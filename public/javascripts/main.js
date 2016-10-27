var app = angular.module('vitamin', [
  'ui.router',
  'cartSummary',
  'categoryOptions'
]);

app.run(['$rootScope', '$state', '$stateParams',
  function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          controller: 'mainCtrl',
          templateUrl: '/templates/index.html',
          data: {
            pageTitle: 'Fruit Stand',
          }
        })
        .state('cart', {
          url: '/cart',
          controller: 'cartCtrl',
          templateUrl: '/templates/cart.html',
          data: {
            pageTitle: 'Fruit Stand | Cart'
          }
        })

      $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }]);
