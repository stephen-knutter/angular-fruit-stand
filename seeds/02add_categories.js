
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('categories').insert({id: 1, category: 'Orange'}),
        knex('categories').insert({id: 2, category: 'Yellow'}),
        knex('categories').insert({id: 3, category: 'Blue'}),
        knex('categories').insert({id: 4, category: 'Red'}),
        knex('categories').insert({id: 5, category: 'Green'})
      ]);
    });
};
