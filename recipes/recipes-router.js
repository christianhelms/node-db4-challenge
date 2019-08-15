const express = require("express");

const Recipes = require("../recipes/recipes-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res
          .status(404)
          .json({ message: "Could not find recipe with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get ingredients or quantities" });
    });
});

// router.get('/:id/steps', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const steps = await Recipes.findSteps(id);

//     if (steps.length) {
//       res.json(steps);
//     } else {
//       res
//         .status(404)
//         .json({ message: 'Could not find steps for given scheme' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to get steps' });
//   }
// });

module.exports = router;
