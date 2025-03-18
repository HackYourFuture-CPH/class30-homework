import express from 'express';
import knex from 'knex';

const knexInstance = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'my-secret-pw',
    database: process.env.DB_NAME || 'hyf_node_week3_warmup',
    multipleStatements: true,
  },
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use('/api', apiRouter);

const contactsAPIRouter = express.Router(); // Sørg for, at routeren er defineret her
apiRouter.use('/contacts', contactsAPIRouter);

contactsAPIRouter.get('/', async (req, res) => {
  let query = knexInstance.select('*').from('contacts');

  const allowedSortFields = ['first_name', 'last_name'];
  const allowedSortOrders = ['ASC', 'DESC'];

  if ('sort' in req.query) {
    const sortParam = req.query.sort.toString();
    const sortParts = sortParam.split(' ');
    const column = sortParts[0];
    const order = sortParts[1] ? sortParts[1].toUpperCase() : 'ASC';

    if (allowedSortFields.includes(column) && allowedSortOrders.includes(order)) {
      query = query.orderBy(column, order);
    } else {
      return res.status(400).json({ error: 'Invalid sort parameter' });
    }
  }

  console.log('SQL', query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
