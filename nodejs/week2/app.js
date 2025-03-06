import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const documents = JSON.parse(fs.readFileSync("documents.json", "utf8"));

app.get("/", (req, res) => {
  res.send(`This is a search engine`);
});

// GET /search
app.get("/search", (req, res) => {
  const searchQuery = req.query.q;
  if (!searchQuery) {
    return res.send(documents);
  }
  const result = documents.filter((doc) =>
    Object.values(doc).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  res.send(result);
});

// GET /documents/:id
app.get("/documents/:id", (req, res) => {
  const idNumber = Number(req.params.id);
  const result = documents.find((c) => c.id === idNumber);
  if (!result) {
    return res.status(404).send("This ID does not exist");
  }
  res.send(result);
});

// POST /search
app.post("/search", (req, res) => {
  const { fields } = req.body;
  const query = req.query.q;

  if (fields && query) {
    return res.status(400).send("You should not use both fields and query together");
  }

  let results = [];

  if (query) {
    results = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    return res.send(results);
  }

  if (fields) {
    results = documents.filter((doc) =>
      Object.entries(fields).every(([key, value]) => doc[key] === value)
    );
    return res.send(results);
  }

  res.send(documents);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});