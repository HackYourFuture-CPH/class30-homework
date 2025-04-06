import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import knex from "./database_client.js";
import nestedRouter from "./routers/nested.js";
import mealsRouter from "./routers/meals.js";
import reviewsRouter from "./routers/reviews.js";
import reservationsRouter from "./routers/reservations.js";



const app = express();

app.use(cors());
app.use(bodyParser.json());

const apiRouter = express.Router();


// This nested router example can also be replaced with your own sub-router
apiRouter.use("/reservations", reservationsRouter);
apiRouter.use("/reviews", reviewsRouter);
apiRouter.use("/meals", mealsRouter);
apiRouter.use("/nested", nestedRouter);
app.use("/api", apiRouter);


app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});


//*/future-meals	Respond with all meals in the future (relative to the when datetime)//*
apiRouter.get("/future-meals", async (req, res) => {
  try{
    const GET_FUTURE_MEALS_QUERY = "SELECT * FROM meals WHERE `when` > NOW();";
    const [futureMeals] = await knex.raw(GET_FUTURE_MEALS_QUERY);
    res.json(futureMeals);
  } catch (error) {
    console.error("Fetching Future Meals Error:", error);
    res.status(500).json({ error: "Not successful" });
  }
});
 


//*/past-meals	Respond with all meals in the past (relative to the when datetime)//*
apiRouter.get("/past-meals", async (req, res) => {
  try{
    const GET_PAST_MEALS_QUERY = "SELECT * FROM meals WHERE `when`< NOW();";
     const [pastMeals,schema] = await knex.raw(GET_PAST_MEALS_QUERY);
      res.json({ pastMeals });

  }
  catch (error) {
    console.error("Error fetching past meals:", error);
    res.status(500).json({ error: "Failed to fetch past meals" });
  }
});
//* all meals	Respond with all meals sorted by ID//*

apiRouter.get("/all-meals", async (req, res) => {
  try {
    const GET_ALL_MEALS_QUERY =
      "SELECT * FROM meals ORDER BY ID ;";
    const allMeals = await knex.raw(GET_ALL_MEALS_QUERY);
    res.json({ allMeals });
  } catch (error) {
    console.error("Error fetching all meals:", error);
    res.status(500).json({ error: "Failed to fetch all meals" });
  }
}
);

  //*respond with the first meal meaning with the minimum id*//
apiRouter.get("/first-meal", async (req, res) => {
  try {
    const GET_FIRST_MEAL_QUERY =
      "SELECT * FROM meals ORDER BY ID LIMIT 1;";
    const firstMeal = await knex.raw(GET_FIRST_MEAL_QUERY);
    res.json({ firstMeal });
  } catch (error) {
    console.error("Error fetching first meal:", error);
    res.status(500).json({ error: "Failed to fetch first meal" });
  }
}
);
  //*respond with the last meal meaning with the maximum id*//

apiRouter.get("/last-meal", async (req, res) => {
  try {
    const GET_LAST_MEAL_QUERY =
      "SELECT * FROM meals ORDER BY ID DESC LIMIT 1;";
    const lastMeal = await knex.raw(GET_LAST_MEAL_QUERY);
    res.json({ lastMeal });
  } catch (error) {
    console.error("Error fetching last meal:", error);
    res.status(500).json({ error: "Failed to fetch last meal" });
  }
}
);
    




