import { error } from 'console';
import express from 'express';
import fs from 'fs';
import { parse } from 'path';
const app = express();
const port = process.env.PORT || 3000;

const documents = JSON.parse(fs.readFileSync('./documents.json', 'utf8'));
// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});
//GET /search
app.get("/search",(req,res) =>{
  const query = req.query.q;

  if(!query){
    return res.json(documents)
  }

  const filteredDocuments = documents.filter(doc =>
    Object.values(doc).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
    )
  );
  res.json(filteredDocuments);
});
// GET /documents/:id
app.get("/documents/:id", (req,res)=>{

  const document = documents.find(doc => doc.id === parseInt(req.params.id,10));

  if(!document){
    return res.status(404).json({error: "document with given id not found"});
  }

  res.json(document);
});

// POST /search

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});