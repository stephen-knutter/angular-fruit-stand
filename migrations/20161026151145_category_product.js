
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category_product', function(t) {
    t.increments();
    t.integer('category_id').references('id').inTable('categories');
    t.integer('product_id').references('id').inTable('products');
    t.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    t.unique(['category_id', 'product_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('category_product');
};
