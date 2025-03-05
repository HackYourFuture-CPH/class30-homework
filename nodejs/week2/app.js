import express from 'express';
import fs from 'fs';
const app = express();
const port = process.env.PORT || 3000;

const documents = JSON.parse(fs.readFileSync('./documents.json', 'utf8'));
// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});
//Get search
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

  // Return filtered documents
  res.json(filteredDocuments);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});