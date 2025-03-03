import express from "express";
import document from "./documents.json"

const searchRouter = express.Router();

searchRouter.get("/", (req, res) => {
    let result = document
    let reqQuery = req.query.q

    if(!reqQuery){
        res.status(200).json(result)
        return
    }else{
        const filteredSearch = result.filter(items => items.value === reqQuery)
        return filteredSearch
    }
});

searchRouter.get('/:id', (req, res)=>{
    let reqParams = +req.params.id
    const item = document.find(element => element.id === reqParams)
    if(!item){
        res.status(404).json({Message: "Not Found. check your id and try again."})
        return 
    }
    res.status(200).json(item)

})


