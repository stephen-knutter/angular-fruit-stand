var app = angular.module('vitamin')

app.controller('mainCtrl', ['$scope', 'fruits', 'cart',
  function($scope, fruits, cart) {
    $scope.cartTotal = cart.total;
    $scope.itemQty = cart.itemQty;
    $scope.items = cart.items;

    $scope.selectFilter = '';
    $scope.searchFilter = '';
    $scope.fruits = fruits.items;

    fruits.getAllFruits();

    $scope.addToCart = function(item) {

      var itemCheck = false;
      $scope.items.map(function(elem, i) {
        if (elem.id == item.id)  itemCheck = true;
      });
      if (!itemCheck) cart.addItem(item);

      $scope.cartTotal = cart.updateCount();
    }
  }]);

app.controller('cartCtrl', ['$scope', function($scope) {
}]);
