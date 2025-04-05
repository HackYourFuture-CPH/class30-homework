import express from "express";
import data from "./documents.json" assert { type: "json" };

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

//
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.json(data);
  }

  const filteredData = data.filter((doc) =>
    Object.values(doc).some((value) =>
      String(value).toLowerCase().includes(q.toLowerCase())
    )
  );

  res.json(filteredData); 
});

//
app.get("/documents/:id", (req, res) => {
  const searchedData = data.find((element) => element.id === req.params.id);

  if (!searchedData) {
    return res.status(404).json({ error: "ID not found" });
  }

  res.json(searchedData);
});

//
app.post("/search", (req, res) => {
  const { q } = req.query;
  const { fields } = req.body;

  if (q && fields) {
    return res.status(400).json({ error: "Cannot provide both q (query) and fields" });
  }

  if (q) {
    const filteredData = data.filter((doc) =>
      Object.values(doc).some((value) =>
        String(value).toLowerCase().includes(q.toLowerCase())
      )
    );
    return res.json(filteredData);
  }

  if (fields) {
    const filteredData = data.filter((doc) =>
      Object.entries(fields).every(([key, value]) => doc[key] == value)
    );

    return res.json(filteredData);
  }

  res.json(data); 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
