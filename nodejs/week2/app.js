import express from "express";
import searchRouter from "./routes/search.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.use("/api", searchRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
