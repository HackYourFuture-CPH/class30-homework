import express from "express";  
const mealsRouter = express.Router();
import { getMeals, getMealById, createMeal, updateMeal, deleteMeal } from "./data/meals";


mealsRouter.get("/", async (req, res) => {
  const meals = await getMeals();
  res.json(meals);
});

mealsRouter.get("/:id", async (req, res) => {
  const meals = await getMealById(req.params.id);
  if (meals) {
    res.json(meals);
  } else {
    res.status(404).json({ error: "Meal not found" });
  }
});
    
mealsRouter.post("/", async (req, res) => {
    const newMeal = req.body;
    const meals = await createMeal(newMeal);
    res.json(meals);
    });

mealsRouter.put("/:id", async (req, res) => {  
    const updatedMeal = req.body;
    const meals = await updateMeal(req.params.id, updatedMeal);
    res.json(meals);
    }
);

mealsRouter.delete("/:id", async (req, res) => {
    const meals = await deleteMeal(req.params.id);
    res.json(meals);
    }
);



export default mealsRouter;


