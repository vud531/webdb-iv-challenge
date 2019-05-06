exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, ingredient_id: 3},
        {recipe_id: 2, ingredient_id: 3},
        {recipe_id: 3, ingredient_id: 3},
        {recipe_id: 1, ingredient_id: 4},
        {recipe_id: 2, ingredient_id: 4},
        {recipe_id: 3, ingredient_id: 4},
        {recipe_id: 1, ingredient_id: 5},
        {recipe_id: 1, ingredient_id: 6},
      ]);
    });
};