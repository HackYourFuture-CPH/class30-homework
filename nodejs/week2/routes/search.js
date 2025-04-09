import express from "express";
import fs from "fs";

const searchRouter = express.Router();

const loadDocuments = () => {
  try {
    const rawData = fs.readFileSync("./documents.json", "utf-8");
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Can not read JSON file:", error);
    return [];
  }
};

const documents = loadDocuments();

//GET /search
searchRouter.get("/search", (req, res) => {
  const q = req.query.q;
  console.log(q);
  if (q) {
    const qLower = q.toLowerCase();
    const filteredSearch = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        String(value).toLowerCase().includes(qLower)
      )
    );
    console.log(filteredSearch);
    res.json(filteredSearch);
    return;
  }

  res.status(200).json(documents);
});

//GET /documents/:id

searchRouter.get("/documents/:id", (req, res) => {
  const documentID = Number(req.params.id);

  if (
    Number.isNaN(documentID) ||
    !Number.isInteger(documentID) ||
    documentID <= 0
  ) {
    return res
      .status(404)
      .json({ error: `Invalid document id: ${req.params.id}` });
  }

  const docWithID = documents.find((doc) => doc.id === documentID);

  if (docWithID) {
    return res.json(docWithID);
  }
  res
    .status(404)
    .json({ error: `no document with this Id found: ${documentID}` });
});

// POST /search

searchRouter.post("/search", (req, res) => {
  const q = req.query.q?.trim() || null;
  const fields = req.body.fields || null;

  if (q && fields) {
    return res.status(400).json({
      error: "Cannot use both 'q' (query) and 'fields' in the same request.",
    });
  }

  if (q) {
    const qLower = q.toLowerCase();
    const filteredSearch = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        String(value).toLowerCase().includes(qLower)
      )
    );
    return res.json(filteredSearch);
  }

  if (fields) {
    const filteredResult = documents.filter((doc) =>
      Object.entries(fields).every(
        ([key, value]) =>
          doc[key] &&
          String(doc[key]).toLowerCase() === String(value).toLowerCase()
      )
    );
    return res.json(filteredResult);
  }

  res.status(200).json(documents);
});

export default searchRouter;
