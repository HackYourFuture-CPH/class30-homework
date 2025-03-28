import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import knex from "./database_client.js";
import nestedRouter from "./routers/nested.js";


const app = express();

app.use(cors());
app.use(bodyParser.json());

const apiRouter = express.Router();

// You can delete this route once you add your own routes
apiRouter.get("/", async (req, res) => {
  const SHOW_TABLES_QUERY =
    process.env.DB_CLIENT === "pg"
      ? "SELECT * FROM pg_catalog.pg_tables;"
      : "SHOW TABLES;";
  const tables = await knex.raw(SHOW_TABLES_QUERY);
  res.json({ tables });
});

// This nested router example can also be replaced with your own sub-router

apiRouter.use("/meals", mealsRouter);
apiRouter.use("/nested", nestedRouter);
app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});

app.get("/my-route", (req, res) => {
  res.send("Hi friend");
});

//*/future-meals	Respond with all meals in the future (relative to the when datetime)//*
app.get("/future-meals", async (req, res) => {

  const GET_MEALS_QUERY = "SELECT * FROM meals WHERE when > NOW();";
  const meals = await knex.raw(GET_MEALS_QUERY);
  res.json({ meals });
}
);  
//*/past-meals	Respond with all meals in the past (relative to the when datetime)//*
app.get("/past-meals", async (req, res) => {

  const GET_MEALS_QUERY = "SELECT * FROM meals WHERE when < NOW();";
  const meals = await knex.raw(GET_MEALS_QUERY);
  res.json({ meals });
}
);
//* all meals	Respond with all meals sorted by ID//*

app.get("/all-meals", async (req, res) => {
  
    const GET_MEALS_QUERY = "SELECT * FROM meals ORDER BY id;";
    const meals = await knex.raw(GET_MEALS_QUERY);
    res.json({ meals });
  }
  );  

  //*respond with the first meal meaning with the minimum id*//
  app.get("/first-meal", async (req, res) => {
  
    const GET_MEALS_QUERY = "SELECT * FROM meals ORDER BY id LIMIT 1;";
    const meals = await knex.raw(GET_MEALS_QUERY);
    res.json({ meals });
  }
  );
  //*respond with the last meal meaning with the maximum id*//

  app.get("/last-meal", async (req, res) => {
    
      const GET_MEALS_QUERY = "SELECT * FROM meals ORDER BY id DESC LIMIT 1;";
      const meals = await knex.raw(GET_MEALS_QUERY);
      res.json({ meals });
    }
    );
    




