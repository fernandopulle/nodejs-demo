const express = require('express')
const testRouter = express.Router();

testRouter.get("/", (req, res, next)=>{
    res.send('Hello world this is test')
})

testRouter.get("/info", (req,res,next)=>{
   res.send('Hello this is test info')
})

module.exports = testRouter;