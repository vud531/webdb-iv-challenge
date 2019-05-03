
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('recipes_ingredients', tbl => {
        // the tracks table must be created before this table is created
        tbl.increments();

        
        tbl
        .float('quality')
        .notNullable()

        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

        tbl
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        }

    );
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('recipes_ingredients')
};
