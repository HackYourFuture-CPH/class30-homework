import express from "express";
import documents from "./documents.json" with { type: 'json' };

export const searchRouter = express.Router();

// GET: Fetch all documents or filter by query
searchRouter.get("/", (req, res) => {
    const query = req.query.q;
    
    if (!query) {
         res.status(200).json(documents);
         return
    }

    const filteredResults = documents.filter(item =>
        item.value?.toLowerCase().includes(query.toLowerCase())
    );
    
    res.status(200).json(filteredResults);
});

// GET: Fetch a document by ID
searchRouter.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const document = documents.find(item => item.id === id);
    
    if (!document) {
        res.status(404).json({ message: "Not Found. Check your ID and try again." });
        return 
    }

    res.status(200).json(document);
});

// POST: Filter documents based on provided fields
searchRouter.post("/", (req, res) => {
    const { fields } = req.body;

    if (!fields || typeof fields !== "object") {
        res.status(400).json({ message: "Invalid request body. Expected an object with fields." });
        return
    }
    
    const filteredDocuments = documents.filter(item => {
         Object.entries(fields).every(([key, value]) => item[key] === value);
         return
    });
    
    res.status(200).json(filteredDocuments);
});