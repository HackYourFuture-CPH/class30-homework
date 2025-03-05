import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

const FILE_PATH_DOCUMENTS = "./documents.json";

const readDocuments = () => {
  try {
    const data = fs.readFileSync(FILE_PATH_DOCUMENTS, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading documents JSON file:", error);
    return [];
  }
};

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  let documents = readDocuments();
  if (q) {
    documents = documents.filter(
      (document) =>
        document.name.toLowerCase().includes(q.toLowerCase()) ||
        document.description.toLowerCase().includes(q.toLowerCase())
    );
  }
  res.status(200).json(documents);
});

app.get("/documents/:id", (req, res) => {
  const { id } = req.params;
  const documents = readDocuments();

  const document = documents.find((doc) => doc.id === parseInt(id));

  if (!document) {
    return res.status(400).json({ error: "Document not found" });
  }

  res.status(200).json(document);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
