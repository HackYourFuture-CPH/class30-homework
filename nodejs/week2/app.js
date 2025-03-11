

import express from 'express'
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
import fs from 'fs';

const documents = JSON.parse(fs.readFileSync("documents.json"));

//get
app.get("/", (req, res) => {
    res.send("This is a search engine");
  });
// GET /search
app.get("/search", (req, res) => {
    const query = req.query.q;
    if (!query) {
      return res.json(documents);
    }
  
    const results = documents.filter(doc =>
      Object.values(doc).some(value => value.toString().toLowerCase().includes(query.toLowerCase()))
    );
  
    res.json(results);
  });

  // GET /documents/:id
app.get("/documents/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const document = documents.find(doc => doc.id === id);
  
    if (!document) {
      return res.status(404).send("Document not found");
    }
      res.json(document);
  });

  // POST /search
app.post("/search", (req, res) => {
    const { q } = req.query;
    const { fields } = req.body;
  
    if (q && fields) {
      return res.status(400).json({ error: "Cannot provide both q (query parameter) and fields (in body)." });
    }
  
    let results = documents;
  
    if (q) {
      results = results.filter(doc =>
        Object.values(doc).some(value => value.toString().toLowerCase().includes(q.toLowerCase()))
      );
    }
  
    if (fields) {
      results = results.filter(doc =>
        Object.entries(fields).every(([key, value]) => doc[key] == value)
      );
    }
  
    res.json(results);
  });



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});