const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
  };
  
  function getRecipes() {
    return db('recipes');
  }

  function getShoppingList(recipe_id) {
    return db('recipes as r')
      .innerJoin('ingredients as i','r.id','=','i.id')
      .select('ingredients')
      .where({recipe_id:id})
   }

  function getInstructions(id) {
    return db('recipes').where({ id });
  }