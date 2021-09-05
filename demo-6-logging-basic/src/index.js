const express = require('express')
const winston = require('winston')
const expressWinston = require('express-winston')

const logger = require('./utils/logger')

const app = express()
const PORT = 3000

const router = express.Router()

app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    meta: false,
    msg: "HTTP  ",
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
  }))

app.use('/test', require('./routes/test'))

app.get('/', (req,res,next)=>{
    res.send('Hello world, welcome')
})

app.use((req,res)=>{
    res.status(404).send("Endpoint not found")
})

app.use((err,req,res,next) =>{
  res.status(500).send("Error in test")
  logger.error(`${err.message} for ${req.ip}`)
} )

app.listen(PORT, ()=>{
    console.log('Server running')
})


