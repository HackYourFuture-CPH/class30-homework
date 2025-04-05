import knex from 'knex'
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD , 
    database: process.env.DB_NAME || "contacts_week_3",
    multipleStatements: true,
  },
});

import express from 'express'
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter= express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get('/', async (req, res) => {
 let query= knexInstance.select("*").from("contacts");

 if ("sort" in req.query){
  const order = req.query.sort.toString;
  if (order.length >0 ){
    query = query.orderByRaw
  }
 }
});

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  };


//  an attacker could send: 


// GET /api/contacts?sort=; DROP TABLE contacts;


// to solve it : 

app.get('/api/contacts', (req, res) => {
    const allowedColumns = ['name', 'email', 'phone']; 
    let sortedInput= req.query.sort;

    if (!allowedColumns.includes(sortedInput)) {
        sortedInput = 'name';
    }

    const query = `SELECT * FROM contacts ORDER BY ${sortedInput}`;

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});