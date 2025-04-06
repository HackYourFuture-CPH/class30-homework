import express from "express";  
import knex from "../../database_client.js";
const mealsRouter = express.Router();



mealsRouter.get("/", async (req, res) => {
  const meals = await knex("meals").select("*");
  res.json(meals);
});

//*----h3-----*//
// GET /api/meals
mealsRouter.get("/", async (req, res) => {
  const meals = await getMeals();
  res.json(meals);

}
);

// POST /api/meals
mealsRouter.post("/", async (req, res) => {
  const newMeal = req.body;
  const meals = await createMeal(newMeal);
  res.json(meals);
}
);
// GET /api/meals/{id}
mealsRouter.get("/:id", async (req, res) => {
  const meals = await getMealById(req.params.id);
  if (meals) {
    res.json(meals);
  } else {
    res.status(404).json({ error: "Meal not found" });
  }
}
);
// PUT /api/meals/{id}
mealsRouter.put("/:id", async (req, res) => {
  const updatedMeal = req.body;
  const meals = await updateMeal(req.params.id, updatedMeal);
  res.json(meals);
}
);
// DELETE /api/meals/{id}
mealsRouter.delete("/:id", async (req, res) => {
  const meals = await deleteMeal(req.params.id);
  res.json(meals);
}
);
export default mealsRouter;
