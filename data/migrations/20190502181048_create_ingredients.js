
exports.up = function(knex, Promise) {

    return knex.schema
    .createTable('ingredients', tbl => {
        // the students and cohorts tables must be created before this table is created
        tbl.increments();
  
        tbl
          .string('name', 128)
          .notNullable()
          .unique();
  
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('ingredients')
};
