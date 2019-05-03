exports.up = function(knex, Promise) {
    // the tables most be created in the right order,
    // tables with FK are created after the referenced table is created
    return knex.schema
      .createTable('dishes', tbl => {
        tbl.increments();
  
        tbl
          .string('name', 128)
          .notNullable()
          .unique();
      })
  };
  
  exports.down = function(knex, Promise) {
    // tables with FK must be removed before the referenced table is removed
    return knex.schema
      .dropTableIfExists('dishes')
  };
  