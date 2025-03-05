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

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

//Get all the documents, also using query
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

  if (documents.length === 0) {
    return res.status(404).json({
      message: "No records found",
    });
  }
  res.status(200).json(documents);
});

//Get single document, by using id
app.get("/documents/:id", (req, res) => {
  const { id } = req.params;
  const documents = readDocuments();

  const document = documents.find((doc) => doc.id === parseInt(id));

  if (!document) {
    return res.status(404).json({ error: "Document not found" });
  }

  res.status(200).json(document);
});

//Post document, either using query or fields but not both
app.post("/search", (req, res) => {
  const { q } = req.query;
  const { fields } = req.body;

  if (q && fields) {
    return res.status(400).json({
      error: "Both q and fields cannot be provided. Please use only one",
    });
  }
  let documents = readDocuments();
  if (q) {
    documents = documents.filter(
      (document) =>
        document.name.toLowerCase().includes(q.toLowerCase()) ||
        document.description.toLowerCase().includes(q.toLowerCase()) ||
        document.price.toString().toLowerCase().includes(q.toLowerCase())
    );
  }

  if (fields) {
    for (let key in fields) {
      documents = documents.filter(
        (document) =>
          document[key] &&
          document[key].toString().toLowerCase() ===
            fields[key].toString().toLowerCase()
      );
    }
  }

  if (documents.length === 0) {
    return res.status(404).json({ error: "Document not found" });
  }
  res.status(200).json(documents);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
