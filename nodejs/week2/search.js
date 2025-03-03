import express from "express";
import document from "./documents.json" with { type: 'json' };

export const searchRouter = express.Router();

searchRouter.get("/", (req, res) => {
    let result = document
    console.log(req.query.q)
    let reqQuery = req.query.q

    if (!reqQuery) {
        res.status(200).json(result)
        return
    } else {
        const filteredSearch = result.filter(items =>
            items.value?.toLowerCase().includes(reqQuery.toLowerCase())
        );
        return res.status(200).json(filteredSearch)
    }
}); 

searchRouter.get('/:id', (req, res) => {
    let reqParams = +req.params.id
    const item = document.find(element => element.id === reqParams)
    if (!item) {
        res.status(404).json({ Message: "Not Found. check your id and try again." })
        return
    }
    res.status(200).json(item)

})

searchRouter.post("/", (req, res) => {
    let reqQuery = req.query
    let reqFilterQueries = req.body.fields;
    if (reqQuery && reqFilterQueries) {
        res.status(400).json({ "message": "can't provive both body and params" })
    }
    let fields = {}
    for (let [key, value] of Object.entries(reqFilterQueries)) {
        fields[`${key}`] = value
    }
    console.log(fields)
    const items = document.filter(item => item.price === fields["price"])
    if (!reqFilterQueries) {
        res.status(200).json(document)
        return
    }
    res.status(200).json(items)
})


