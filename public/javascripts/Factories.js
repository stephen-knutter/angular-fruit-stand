var app = angular.module('vitamin');

app.factory('fruits', ['$http', function($http) {
  var fruit = {
    items: []
  };

  fruit.getAllFruits = function() {
    return $http.get('/products').success(function(data) {
        angular.copy(data.rows, fruit.items);
    });
  };

  return fruit;
}]);

app.factory('cart', [function() {
  var cart = {
    items: [],
    total: 0,
    cartPriceTotal: 0,
    itemQty: {}
  };

  cart.cartTotal = function() {
    return cart.total;
  };

  cart.cartItems = function() {
    return cart.items;
  };

  cart.addItem = function(item) {
    cart.items.push(item);
  };

  cart.totalPrice = function() {
    cart.cartPriceTotal = 0;

    if (cart.items.length) {
      cart.items.map(function(elem, i) {
        var qty = parseInt(cart.itemQty[elem.id]);
        cart.cartPriceTotal += elem.price * qty;
      });
    }

    return cart.cartPriceTotal;
  };

  cart.updatePrice = function(itemId) {
    return cart.cartPriceTotal = cart.totalPrice();
  };

  cart.updateCount = function() {
    cart.total = 0;

    for (var i in cart.itemQty) {
      var qty = parseInt(cart.itemQty[i]);
      qty = qty ? qty : 0;
      cart.total += qty;
    }

    return cart.total;
  };

  cart.removeFromCart = function(item) {
    var itemId = item.id;
    cart.itemQty[itemId] = "";

    cart.items = cart.items.filter(function(elem, i) {
      return elem.id != itemId;
    });

    return cart.items;
  };

  return cart;
}]);
