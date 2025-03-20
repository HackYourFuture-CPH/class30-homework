import express from 'express'
import bodyParser from 'body-parser';
import fs from 'fs';


const documents = JSON.parse(fs.readFileSync('./document.json', 'utf-8'));

const app = express();
const port = 3600;

// Support parsing JSON requests
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//get all documents
app.get('/search', (req, res) => {
  
  if(!req.query.q){
    console.log(`No query specified. sending all documents`);
   return res.json(documents);
  };
  const query = req.query.q.toLowerCase();
  const result = documents.filter((document) => {
    return Object.values(document).some(value => value.toString().toLowerCase().includes(query));
  });
  console.log(`Search for ${query} returned ${result.length} results`);
  return res.json(result);
    
});

//GET /documents/:id
app.get('/documents/:id', (req, res) => {
  const id = req.params.id;
  const result = documents.find(document => document.id == id); //I know I need to parse the id and stick to string equality. but this is just a warm up. can I get away with this?
  if (!result) {
    return res.status(404).json({ error: 'Document not found' });
  }
  console.log(`Document with id ${id} found`);
  return res.json(result);
});


//POST /search
app.post('/search', (req, res) => {
    const query = req.query.q ? req.query.q.toLowerCase() : null; 
    const fields = req.body.fields || null;
    //when both query and fields are provided
    if (fields && query) {
        return res.status(400).json({
            message: "Both query parameter 'q' and 'fields' in body cannot be provided at the same time."
        });
    }

    //when neither query nor fields are provided
    if (!query && !fields) {
        return res.status(400).json({
            message: "Please provide either query parameter 'q' or 'fields' in body."
        });
    }
    
    let result;

    //when only fields is provided
    if (fields) {
        result = documents.filter((document) => {
            return Object.keys(fields).every((field) => {
                return document[field] && document[field].toString().toLowerCase() === fields[field].toString().toLowerCase();
              });
        });
        console.log(`Search in fields ${JSON.stringify(fields)} returned ${result.length} results`);

    }

    //when only query is provided
    if (query) {
        result = documents.filter((document) => {
            return Object.values(document).some((value) => {
                return value.toString().toLowerCase().includes(query);
              });
        });
        console.log(`Search for ${query} returned ${result.length} results`);
    }
    return res.json(result);

});


app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});