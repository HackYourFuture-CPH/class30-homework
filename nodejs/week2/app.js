import express from 'express'
import { searchRouter } from "./search.js"
const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());
app.use("/search", searchRouter);
app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});