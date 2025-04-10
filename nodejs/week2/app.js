import express from 'express'
<<<<<<< HEAD
=======
import { searchRouter } from "./search.js"
>>>>>>> f2a203551f9af18df2b0d5718de7ae6b0c40927d
const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());
<<<<<<< HEAD

=======
app.use("/search", searchRouter)
>>>>>>> f2a203551f9af18df2b0d5718de7ae6b0c40927d
app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});