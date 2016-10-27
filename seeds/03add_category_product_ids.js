
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category_product').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('category_product').insert({id: 1, category_id: 1, product_id: 1}),
        knex('category_product').insert({id: 2, category_id: 2, product_id: 2}),
        knex('category_product').insert({id: 3, category_id: 3, product_id: 3}),
        knex('category_product').insert({id: 4, category_id: 4, product_id: 4}),
        knex('category_product').insert({id: 5, category_id: 5, product_id: 5})
      ]);
    });
};
