import 'dotenv/config'
import knex from 'knex'
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
  },
});

import express from 'express'
const app = express();
const port = process.env.PORT;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  if ("sort" in req.query) {
    const sortColumn = ["id", "first_name", "last_name", "email", "phone"];
    const sortDirection = ["ASC", "DESC"];

    const [column, direction] = req.query.sort.split(" ");

    if (sortColumn.includes(column) && sortDirection.includes(direction)) {
      query = query.orderBy(column, direction);
    } else {
        return res.status(400).json({ error: "Invalid parameter"});
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