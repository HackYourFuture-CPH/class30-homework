import express from 'express'
import fs from 'fs'

const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

const jsonDocuments = JSON.parse(fs.readFileSync('documents.json'));

app.get("/", (req, res) => {
  res.send("This is a search engine");
});


app.get('/search', (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.json(jsonDocuments);
  }
  

  const filteredDocuments = jsonDocuments.filter(doc =>
    Object.values(doc).some(value =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );

  res.json(filteredDocuments);
});


app.get("/documents/:id", (req, res) => {
  const id = +req.params.id; 
  const foundDocument = jsonDocuments.find((doc) => doc.id === id);

  if (!foundDocument) {
    return res.status(404).json({ error: "ID not found" });
  }

  res.json(foundDocument);
});


app.post('/search', (req, res) => {
  const  fields  = req.body.fields;
  const  q  = req.query.q;
  

  if (fields && q) return res.status(400).send("choose either 'query' or 'fields', both cannot be used together.");

  if (fields) {
    const filteredDocumnets = jsonDocuments.filter(doc =>
      Object.entries(fields).every(([key, value]) =>
        doc[key] && doc[key].toString().toLowerCase() === value.toLowerCase()
      )
    );
    return res.json(filteredDocumnets);
  }

  if (q) {
    const filteredDocuments = jsonDocuments.filter(doc =>
      Object.values(doc).some(value =>
        value.toString().toLowerCase().includes(q.toLowerCase())
      )
    );
    return res.json(filteredDocuments);
  }

  res.json(jsonDocuments);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});