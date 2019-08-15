exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { recipe_name: 'Pancakes', instructions: 'Mix ingredients, cook on grill medium heat & enjoy'},
    {
      recipe_name: 'Waffles', instructions: 'Mix ingredients, cook on waffle maker & enjoy'},
  ]);
};
