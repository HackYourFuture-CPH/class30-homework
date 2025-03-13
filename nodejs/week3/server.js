import express from "express";
import "dotenv/config";
import contactRouters from "./app.js";
const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "hi" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", contactRouters);

app.listen(port, () => console.log(`listening on port ${port}`));
