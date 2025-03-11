import knex from 'knex';
import express from 'express';
const app=express();
const port = process.env.PORT || 3000;


app.use(express.json());

const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "123456",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});
knexInstance.raw("SELECT 1")
  .then(() => console.log("✅ Database connection successful! 🎉"))
  .catch((err) => console.error("❌ Database connection failed:", err));

  const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);
contactsAPIRouter.get("/", async (req, res) => {
    let query = knexInstance.select("*").from("contacts");
  
    if ("sort" in req.query) {
      const validColumns = ["first_name", "last_name", "email", "phone", "id"];
      const validDirections = ["ASC", "DESC"];
  
      const sortParams = req.query.sort.toString().split(" ");
      if (sortParams.length === 2 && validColumns.includes(sortParams[0]) && validDirections.includes(sortParams[1].toUpperCase()))
      { 
        query = query.orderBy(sortParams[0], sortParams[1].toUpperCase());
      } 
      else {
        return res.status(400).json({ error: "Invalid data" });
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
  