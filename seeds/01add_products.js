
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('products').insert({id: 1,
            name: 'Orange',
            minerals: 'Folate, Choline, Vitamin C, Thiamin',
            price: 800,
            in_stock: 'Yes',
            rating: 4,
            img_url: 'item-orange.jpg'
          }),
        knex('products').insert({id: 2,
            name: 'Banana',
            minerals: 'Manganese, Potassium, Magnesium, Phosphorus',
            price: 690,
            in_stock: 'Yes',
            rating: 5,
            img_url: 'item-banana.jpg'
          }),
        knex('products').insert({id: 3,
            name: 'Blueberry',
            minerals: 'Vitamin C, Vitamin K, Vitamin B6, Choline, Manganese',
            price: 1500,
            in_stock: 'Yes',
            rating: 5,
            img_url: 'item-blueberry.jpg'
          }),
        knex('products').insert({id: 4,
            name: 'Cherry',
            minerals: 'Folate, Vitamin A, Copper, Manganese, Potassium',
            price: 900,
            in_stock: 'Yes',
            rating: 4,
            img_url: 'item-cherry.jpg'
          }),
        knex('products').insert({id: 5,
            name: 'Kiwi',
            minerals: 'Vitamin C, Vitamin K, Vitamin E, Potassium',
            price: 200,
            in_stock: 'Yes',
            rating: 4,
            img_url: 'item-kiwi.jpg'
          })
      ]);
    });
};
