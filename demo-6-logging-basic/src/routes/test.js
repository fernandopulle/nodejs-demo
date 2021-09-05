const express = require('express')
const testRouter = express.Router();
const logger = require('../utils/logger')


testRouter.get("/", function(req, res, next){
    res.send('Hello world this is test')
})

testRouter.get("/info", (req,res,next)=>{
    logger.info(`info request from ${req.ip}`)
    res.send('Hello this is test info')
})

testRouter.get("/calculate", (req,res,next)=>{
    let n = 2;
    n += y;
})

module.exports = testRouter;