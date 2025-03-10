import express from "express";
import knex from "./database.js";

const contactRouters = express.Router();

contactRouters.get("/", async (req, res) => {
  const result = await knex.select("*").from("contacts");
  res.json({ message: "Contacts to display", result });
});

// contactsAPIRouter.get("/", async (req, res) => {
//   let query = knexInstance.select("*").from("contacts");

//   if ("sort" in req.query) {
//     const orderBy = req.query.sort.toString();
//     if (orderBy.length > 0) {
//       query = query.orderByRaw(orderBy);
//     }
//   }

//   console.log("SQL", query.toSQL().sql);

//   try {
//     const data = await query;
//     res.json({ data });
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

export default contactRouters;
