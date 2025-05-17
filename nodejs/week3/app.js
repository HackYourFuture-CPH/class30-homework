import knex from 'knex';
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config(); 

const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from 'express'
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  const allowedColumns = ["id", "first_name", "last_name", "email", "phone"];

  if ("sort" in req.query) {
    const orderBy = req.query.sort.toString();
    if (allowedColumns.includes(orderBy)) {
      query = query.orderBy(orderBy);
    } else {
     res.status(400).json({ error: "Invalid sort parameter" });
     return
      }
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});