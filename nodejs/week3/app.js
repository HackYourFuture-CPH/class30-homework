import knexInstance from "./db.js";
import "dotenv/config";
import express from "express";
const app = express();

const port = process.env.PORT;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
	let query = knexInstance.select("*").from("contacts");

	if ("sort" in req.query) {
		const orderBy = req.query.sort.toString();

		const allowedColumns = ["id", "first_name", "last_name", "email", "phone"];
		const allowedDirections = ["ASC", "DESC"];

		const parts = orderBy.trim().split(" ");

		if (parts.length === 1 || parts.length === 2) {
			const column = parts[0];
			const direction = parts.lenght === 2 ? parts[1].toUpperCase() : "ASC";
			if (
				allowedColumns.includes(column) &&
				(parts.length === 1 || allowedDirections.includes(direction))
			) {
				query = query.orderBy(column, direction);
			} else {
				return res.status(400).json({ error: "Invalid sort parameter" });
			}
		} else {
			return res.status(400).json({ error: "Invalid sort parameter format" });
		}
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

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
