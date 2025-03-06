import express from 'express';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const documents = JSON.parse(fs.readFileSync('documents.json', 'utf8'));

app.get('/', (req, res) => {
  res.send('This is a search engine');
});

app.get('/search', (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.json(documents);
  }

  const filteredDocs = documents.filter(doc => {
    return Object.values(doc).some(value =>
      value.toString().toLowerCase().includes(query.toLowerCase()),
    );
  });

  res.json(filteredDocs);
});

app.get('/documents/:id', (req, res) => {
  const docId = parseInt(req.params.id, 10);
  const document = documents.find(doc => doc.id === docId);

  if (!document) {
    return res.status(404).send('Document not found');
  }

  res.json(document);
});

app.post('/search', (req, res) => {
  const query = req.query.q;
  const { fields } = req.body;

  if (query && fields) {
    return res
      .status(400)
      .send("Both 'q' and 'fields' cannot be provided at the same time.");
  }

  if (fields) {
    const filteredDocs = documents.filter(doc =>
      Object.entries(fields).every(
        ([key, value]) =>
          doc[key] && doc[key].toString().toLowerCase() === value.toLowerCase(),
      ),
    );
    return res.json(filteredDocs);
  }

  if (query) {
    const filteredDocs = documents.filter(doc =>
      Object.values(doc).some(value =>
        value.toString().toLowerCase().includes(query.toLowerCase()),
      ),
    );
    return res.json(filteredDocs);
  }

  res.json(documents);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
