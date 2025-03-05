import { match } from 'assert';
import express from 'express';
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

const documents = async() => {
    try{
        const filePath = path.join(__dirname, "documents.json");
        const fileContent = await fs.readFile(filePath, "utf-8");
        return JSON.parse(fileContent);
    } catch (error) {
        console.error("Error reading file", error);
        return [];
    }
};

const app = express();
const port = process.env.PORT || 3000;



app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is a search engine");
});

// GET /search
app.get("/search", async (req, res) => {
    const data = await documents();
    const q = req.query.q;
    if (q) {
        const filteredData = data.filter(
            (data) =>
                data.name.toLowerCase().includes(q.toLowerCase()) ||
                data.description.toLowerCase().includes(q.toLowerCase())
        );
        if (filteredData.length === 0) {
            return res.send("No match data");
        }
        return res.json(filteredData);
    };
    return res.json(data);
})

// GET /documents/:id
app.get("/documents/:id", async (req, res) => {
    const data = await documents();
    const itemId = +req.params.id;
    const matchData = data.filter((data) => data.id === itemId);
    if (matchData.length === 0) {
        return res.status(404).send("data not found");
    }
    return res.json(matchData);
})

// POST /search
app.post("/search", async (req, res) => {
    const data = await documents();
    const q = req.query.q;
    const fields = req.body.fields;

    if (q && fields) {
        return res.status(400).send("Please provide only q or fields.")
    };

    let filteredData = data;

    if (q) {
        filteredData = filteredData.filter(
            (item) =>
                item.name.toLowerCase().includes(q.toLowerCase()) ||
                item.description.toLowerCase().includes(q.toLowerCase()) ||
                item.price.toString().includes(q.toLowerCase())
        );
    }

    if (fields) {
        for (const field in fields) {
            filteredData = filteredData.filter(
                (item) => 
                    item[field] && 
                    item[field].toString().toLowerCase() === fields[field].toString().toLowerCase()
            );
        }
    }
        
    if (filteredData.length === 0) {
        return res.status(404).send("No match data");
    }
    
    return res.json(filteredData);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
