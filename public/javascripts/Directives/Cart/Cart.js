angular.module('cartSummary', [])
  .directive('cartSummary', function() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/javascripts/Directives/Cart/Cart.html',
      controller: function($scope, cart) {
        $scope.itemQty = cart.itemQty;
        $scope.total = cart.total;
        $scope.totalPrice = cart.totalPrice();
        $scope.cartItems = cart.cartItems();

        $scope.updatePrice = function(itemId) {
          $scope.totalPrice = cart.updatePrice(itemId);

          cart.updateCount();
        };

        $scope.removeFromCart = function(item) {
          var itemId = item.id;

          $scope.cartItems = cart.removeFromCart(item);
          $scope.totalPrice = cart.updatePrice(itemId);

          cart.updateCount();
        }
      }
    }
  });
