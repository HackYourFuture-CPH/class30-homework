import express from 'express';
import documents from './documents.json' with { type: "json" };
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/search", (req, res) => {
    const q = req.query.q;
    if(q){
        const filteredValue =  documents.filter((doc) => doc.value?.includes(q));
        res.json(filteredValue);
    } else{
        res.json(documents);
    }
});

app.get("/documents/:id", (req, res) => {
    const id = Number(req.params.id);
    const document = documents.find((doc) => doc.id === id);

    if (!document) {
        return res.status(404).send(`Document with ID ${id} not found`);
    }

    return res.json(document);
});

app.post("/search", (req, res) => {
    const q = req.query.q; 
    const fields = req.body.fields; 

    if (q && fields) {
        return res.status(400).json({ error: "both can't be provided" });
    }

    if (fields) {
        const filteredDocuments = documents.filter(doc => 
            Object.keys(fields).every(key => doc[key] !== undefined && doc[key] === fields[key])
        );
        return res.json(filteredDocuments);
    }

    if (q) {
        const filteredDocuments = documents.filter(doc => doc.value?.includes(q));
        return res.json(filteredDocuments);
    }

});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});