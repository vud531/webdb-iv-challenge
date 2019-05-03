
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Duc Steak', dish_id: 3},
        {name: 'Duc Seafood Salad', dish_id: 2},
        {name: 'Spicy Steak', dish_id: 3},
        {name: 'Sweet n Sour Steak', dish_id: 3},
        {name: 'Healthy Chicken Salad', dish_id: 1},
        {name: 'Tasty Chicken Salad', dish_id: 1}

      ]);
    });
};
