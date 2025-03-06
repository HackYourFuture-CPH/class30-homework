import express from "express";
import fs from "fs";

const docs = JSON.parse(fs.readFileSync("documents.json", "utf-8"));

const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
	res.send(docs);
});

app.get("/search", (req, res) => {
	const { q } = req.query;

	const filteredDocs = docs.filter((doc) =>
		Object.values(doc).some(
			(value) =>
				typeof value === "string" &&
				value.toLowerCase().includes(q.toLowerCase())
		)
	);

	!q ? res.json(docs) : res.json(filteredDocs);
});

app.get("/documents/:id", (req, res) => {
	const { id } = req.params;

	const document = docs.find((doc) => doc.id === Number(id));

	!document
		? res.status(404).json({ message: "Document not found." })
		: res.json(document);
});

app.post("/search", (req, res) => {
	const { q } = req.params;
	const { fields } = req.body;

	if (q && fields) {
		return res
			.status(400)
			.json({
				error: "Cannot provide both query parameter and fields in body",
			});
	}

    if (q && fields) {
        return res.status(400).json({ error: "Both q and fields cannot be provided together" });
    }

    if (q) {
        const filteredDocs = docs.filter((doc) =>
            Object.values(doc).some(
                (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(q.toLowerCase())
            )
        );
        return res.json(filteredDocs);
    }

    if (fields) {
        const filteredDocs = docs.filter((doc) =>
            Object.entries(fields).every(([key, value]) => doc[key] === value)
        );
        return res.json(filteredDocs);
    }

    res.json(docs);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
