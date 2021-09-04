const express = require('express')

const app = express()
const PORT = 3000

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



