exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', tbl => {
        tbl.increments();
  
        tbl
          .string('recipe_name', 255)
          .notNullable()
          .unique();
      })
      .createTable('ingredients', tbl => {
        tbl.increments();
  
        tbl
          .string('ingredient_name', 255)
          .notNullable()
      })
      .createTable('recipe_ingredients', tbl => {
        tbl.increments();
  
        tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE'); // if the PK on primary table changes, what to do?
        tbl
          .integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE'); // if the PK on primary table changes, what to do?
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('recipe_ingredients')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes');
  };
  