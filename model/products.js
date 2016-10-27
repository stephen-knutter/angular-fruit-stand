var knex = require('./config');

var query = {
  getAllProducts: function() {
    return knex.raw(
      'SELECT products.*, ' +
        'array_to_json(array_agg(ROW(categories.category) ' +
        'ORDER BY categories.category)) AS categories ' +
        'FROM products ' +
        'LEFT JOIN category_product ON products.id = category_product.product_id ' +
        'LEFT JOIN categories ON category_product.category_id = categories.id ' +
        'GROUP BY products.id'
    );
  }
}

module.exports = query;
