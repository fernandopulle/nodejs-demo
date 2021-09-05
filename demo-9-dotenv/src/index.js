const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.port

const router = express.Router()

app.use('/test', require('./routes/test'))

app.get('/', (req,res,next)=>{
    res.send('Hello world, welcome')
})

app.use((req,res)=>{
    res.status(404).send("Endpoint not found")
})

app.listen(PORT, ()=>{
    console.log('Server running')
})



