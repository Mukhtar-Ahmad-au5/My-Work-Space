const express = require("express")
const router = express.Router()
const ObjectID = require('mongodb').ObjectID;
const mongoose = require("mongoose")

const searchHistorySchema = {
    searchTerm: {
        type: String,
        required: true
    }
}

const searchHistory = mongoose.model("searchHistory", searchHistorySchema)

router.get("/", async (req, res, next)=>{
    try {
        let history = await searchHistory.find()
        res.json({
            status: true,
            data: history
        })
    }
    catch(err){
        console.log("error 1", err)
        res.status(400).send(err)
    }
})

router.get("/", async(req, res, next)=>{
    try{
        let {searchTerm} = await req.body;
        let history = searchHistory.create({ searchTerm })
        res.json({
            status: true,
            data: history
        })
    }
    catch(err){
        console.log("error 2", err)
        res.status(400).send(err)
    }
})

router.delete("/all", async(req, res, next)=>{
    try{
        await searchHistory.deleteMany()
        res.json({
            status: true,
            message: "Deleted all successfully"
        })
    }
    catch(err){
        console.log("error 3", err)
        res.status(400).send(err)
    }
})

router.delete("/:id", async(req, res, next)=>{
    try{
        let { id } = req.params;
        await searchHistory.deleteOne({_id: ObjectID(id)})
        res.json({
            status: true,
            message: "successfully deleted"
        })
    }
    catch(err){
        console.log("error 4", err)
        res.status(400).send(err)
    }
})

module.exports = router;