
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'fried fish'},
        {name: 'grilled chicken'},
        {name: 'beef'},
        {name: 'salt'},
        {name: 'garlic'},
        {name: 'butter'},
        {name: 'spinach'},
        {name: 'carrot'},

      ]);
    });
};
