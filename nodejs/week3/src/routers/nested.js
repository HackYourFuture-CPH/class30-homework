import express from "express";

// This router can be deleted once you add your own router
const nestedRouter = express.Router();

nestedRouter.get("/", (req, res) => {
  res.json({ message: "Hello nested router" });
});

export default nestedRouter;
