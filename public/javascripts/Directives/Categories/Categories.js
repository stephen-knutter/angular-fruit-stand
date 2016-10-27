angular.module('categoryOptions', [])
  .directive('categoryOptions', function() {
    return {
      restrict: 'E',
      scope: {
        fruits: '=',
        selectFilter: '=filter'
      },
      templateUrl: '/javascripts/Directives/Categories/Categories.html',
      controller: function($rootScope, $scope) {
        $rootScope.selectFilter = $scope.selectFilter;
      }
    }
  });
