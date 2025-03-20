import express from 'express';
import knex from 'knex';

const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 33086,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "mysql-root-password",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  if ("sort" in req.query) {
    const orderBy = req.query.sort.toString();
    if (orderBy.length > 0) {
        if (orderBy === "first_name ASC" || orderBy === "first_name DESC" || 
            orderBy === "last_name ASC" || orderBy === "last_name DESC") {
          const [column, direction] = orderBy.split(" ");
          query = query.orderBy(column, direction.toUpperCase());
        } else {
          return res.status(400).json({ error: "Invalid sort parameter" });
        }
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