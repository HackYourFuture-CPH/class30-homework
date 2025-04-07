mport express from "express";
import knex from "../database_client.js";
const mealsRouter = express.Router();

// Get all meals
const getAllMeals = async () => {
  try {
    const meals = await knex("meals");
    res.json(meals);
  } catch (error) {
    console.error("Error fetching meals:", error);
    res.status(500).json({ error: "Failed to fetch meals" });
  }
};
//GET api/meals with query parameters
mealsRouter.get("/", async (req, res) => {
  try {
    let meals;
    if (!req.query.availableReservations) {
      meals = await getAllMeals();
    } else {
      meals = await knex("meals")
        .leftJoin("reservations", "meals.id", "reservations.meal_id")
        .select("meals.*"
          , knex.raw("meal.max_reservations - COUNT(reservations.number_of_guests) AS availableReservations"))
          .groupBy("meals.id")
          .orderBy("availableReservations", "asc");
    }
    //max_price
    if (req.query.max_price) {
      const max_price = parseFloat(req.query.max_price);
      if (isNaN(max_price)) {
        return res.status(400).json({ error: "Invalid value" });
      }
      meals = meals.filter((meal) => meal.price <= max_price);

    };
    //availableReservations
    if (req.query.availableReservations) {
      const availableReservations = req.query.availableReservations.toLowerCase() === "true";
      if (availableReservations) {
        meals = meals.filter((meal) => meal.availableReservations > 0);
      } else {
        return res.status(400).json({ error: "No matching" });
      }

    };
    //title
    if (req.query.title) {
      const titleKey = req.query.title.toLowerCase().split(" ");
      meals = meals.filter(meal => {
       for (const key of titleKey) {
          if (!meal.title.toLowerCase().includes(key)) {
            return false;
          }
        }
        return true;

      })

    };
    //dateAfter
    if (req.query.dateAfter) {
      const dateInput = new Date(req.query.dateAfter);
      const dateInputFormatted = dateInput.toISOString().slice(0, 19).replace("T", " ");
      meals = meals.filter((meal) => new Date(meal.when) > new Date(dateInputFormatted));
    };

    //dateBefore
    if (req.query.dateBefore) {
      const dateInput = new Date(req.query.dateBefore);
      const dateInputFormatted = dateInput.toISOString().slice(0, 19).replace("T", " ");
      meals = meals.filter((meal) => new Date(meal.when) < new Date(dateInputFormatted));
    };
    //limit

    if (req.query.limit) {
      const limitNum = +req.query.limit;
      if (isNaN(limitNum) || limitNum < 0) {
        return res.status(400).json({ error: "Invalid limit value" });
      }
      meals = meals.slice(0, limitNum);
    };

    //sortKey
    if (req.query.sortKey) {
      const validSortKeys = ["when", "max_reservation", "price"];
      const sortKey = req.query.sortKey.toLowerCase();
      if (validSortKeys.includes(sortKey)) {
          meals.sort((a, b) => {
            let aValue = a[sortKey];
            let bValue = b[sortKey];
            if (typeof aValue === "string") {
              aValue = aValue.toLowerCase();
              bValue = bValue.toLowerCase();
            }
            if (aValue < bValue) return -1;
            if (aValue > bValue) return 1;
            return 0;
          })
      }
      else {
        return res.status(400).json({ error: "Invalid sortKey value" });
      }
    };

    //sortDir
    if (req.query.sortDir) {
      const ValidSortDir = ["asc", "desc"];
      const sortDir = req.query.sortDir.toLowerCase();
      if (!ValidSortDir.includes(sortDir)) {
        return res.status(400).json({ error: "Invalid sortDir value" });
      }
      if (sortDir === "desc") {
        meals.reverse();
      }
    };

    if (meals.length === 0) {
      return res.status(404).json({ error: "No meals found" });
    }
    res.status(200).json(meals);
  } catch (error) {
    console.error("Error fetching meals:", error);
    res.status(500).json({ error: "Failed to fetch meals" });
  }
}
);

//Get/Api/meals/:id

mealsRouter.get("/:id", async (req, res) => {
  try {
    const allMeals = await getAllMeals();
    const mealId = +req.params.id;
    const matchedMeal = allMeals.find((meal) => meal.id === mealId);
    if (!matchedMeal) {
      return res.status(404).json({ error: "Meal not found" });
    }
    res.status(200).json(matchedMeal);
  } catch (error) {
    console.error("Error fetching meal:", error);
    res.status(500).json({ error: "Failed to fetch meal" });
  }
}
);
//PUT/api/meals/:id
mealsRouter.put("/:id", async (req, res) => {
  try {
    const mealId = +req.params.id;
    const reqBody = req.body;
    const meal = await knex("meals").where({ id: mealId }).first();
    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }
    const updatedMealNum = await knex("meals")
      .where({ id: mealId })
      .update(reqBody);

    if (updatedMealNum === 0) {
      return res.status(200).json({ message: "Meal updated successfully" });
    } else {
      res.status(404).json({ error: "Meal not found" });
    }
  } catch (error) {
    console.error("Error updating meal:", error);
    res.status(500).json({ error: "Failed to update meal" });
  }
}

);
 
//delete/api/meals/:id

mealsRouter.delete("/:id", async (req, res) => {
  try {
    const mealId = +req.params.id;
    const deletedMealNum = await knex("meals").where({ id: mealId }).del();

    if (deletedMealNum === 0) {
      return res.status(200).json({ message: "Meal deleted successfully" });
    } else {
      res.status(404).json({ error: "Meal not found" });
    }
  } catch (error) {
    console.error("Error deleting meal:", error);
    res.status(500).json({ error: "Failed to delete meal" });
  }
}
);
//GET/api/meals_id/reviews
mealsRouter.get("/:meal_id/reviews", async (req, res) => {
  try {
    const mealId = +req.params.meal_id;
    const matchReviews = await knex("meals").join("reviews", "meals.id", "reviews.meal_id")
      .select(
        "meals.id AS meal_id",
        "meals.title AS meal_title",
        "reviews.title AS review_title",
        "reviews.description AS review_description",
        "reviews.stars AS review_stars",
        "reviews.created_at AS review_created_at",

      )
      .where("meals.id", mealId);

    if (matchReviews.length === 0) {
      return res.status(404).json({ error: "No matching review" });
    }
    res.status(200).json(matchReviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
);


export default mealsRouter;













