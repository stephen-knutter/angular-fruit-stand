exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(t) {
    t.increments();
    t.string('name');
    t.string('minerals');
    t.integer('price');
    t.string('in_stock');
    t.integer('rating').defaultTo(1);
    t.string('img_url');
    t.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    t.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
