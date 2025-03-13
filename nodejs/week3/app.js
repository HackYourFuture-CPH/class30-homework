import express from "express";
import knex from "./database.js";

const contactRouters = express.Router();

contactRouters.get("/", async (req, res) => {
  const result = await knex.select("*").from("contacts");
  res.json({ message: "Contacts to display", result });
});

contactRouters.get("/", async (req, res) => {
  let query = knex("contacts").select();

  const allowedSortColumns = ["id", "first_name", "last_name"];

  const orderBy = req.query.sort ? req.query.sort.toString().trim() : "";
  console.log("Received sort parameter:", orderBy);

  if (orderBy && allowedSortColumns.includes(orderBy)) {
    query = query.orderBy(orderBy, orderBy === "last_name" ? "desc" : "asc");
  } else {
    return res.status(400).json({ message: "Invalid sort parameter" });
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default contactRouters;
