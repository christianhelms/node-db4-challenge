
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: "Flour" }, 
    { ingredient_name: "Butter" }, 
    { ingredient_name: "Milk" }, 
    { ingredient_name: "Eggs" },
    { ingredient_name: "Syrup" },
  ]);
};
