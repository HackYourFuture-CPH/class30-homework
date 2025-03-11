import express from 'express';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

// The documents.json file is assumed to be in the same directory as app.js
const documentsFilePath = './documents.json';

// Helper function to load documents from the JSON file
const loadDocuments = () => {
  const data = fs.readFileSync(documentsFilePath);
  return JSON.parse(data);
};

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET /search endpoint
app.get("/search", (req, res) => {
  const q = req.query.q;  // Retrieve the query parameter q
  const documents = loadDocuments();

  if (q) {
    // Filter documents where any field contains the query
    const result = documents.filter(doc =>
      Object.values(doc).some(value => 
        String(value).toLowerCase().includes(q.toLowerCase())
      )
    );
    return res.json(result);
  }

  // If q is not provided, return all documents
  res.json(documents);
});

// GET /documents/:id endpoint
app.get("/documents/:id", (req, res) => {
  const { id } = req.params;
  const documents = loadDocuments();
  
  const document = documents.find(doc => doc.id == id);
  
  if (!document) {
    return res.status(404).send("Document not found");
  }
  
  res.json(document);
});

// POST /search endpoint
app.post("/search", (req, res) => {
  const { q } = req.query;
  const { fields } = req.body;
  
  if (q && fields) {
    return res.status(400).send("Both query parameter q and fields in body can't be provided at the same time.");
  }

  const documents = loadDocuments();
  
  if (q) {
    const result = documents.filter(doc =>
      Object.values(doc).some(value => 
        String(value).toLowerCase().includes(q.toLowerCase())
      )
    );
    return res.json(result);
  }

  if (fields) {
    const result = documents.filter(doc => 
      Object.keys(fields).every(field => doc[field] === fields[field])
    );
    return res.json(result);
  }

  res.status(400).send("Please provide either q query parameter or fields in the request body.");
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
