
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(t) {
    t.increments();
    t.string('category');
    t.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
