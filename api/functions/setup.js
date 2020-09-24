require('dotenv').config()


const express = require("express")
const app = express()

//Set defaults for error handling.
process.on('unhandledRejection', error => {
    console.error('oops! ', error)
})

const cors = require('cors')

const whitelist = ['http://localhost:3000']
const corsOptions = process.env.NODE_ENV === 'production' ? {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true)

    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      console.log('Not allowed by CORS')
      callback(new Error('Not allowed by CORS'))
    }
  }
} : '*'
app.use(cors(corsOptions))

//Set how request body's are parsed.
app.bodyParser = require('body-parser')
app.use(app.bodyParser.json())
app.use(app.bodyParser.urlencoded({
  extended: true
}))

//configure authentication tools
app.jwt = require('jsonwebtoken')
app.bcrypt = require('bcryptjs')

//setup database
app.mongoose = require('mongoose')
app.mongoose.set('useFindAndModify', false)
app.mongoose.Promise = Promise
app.db = require("../database/database-controller")
app.db.init()

app.use((error, req, res, next) => res.status(500).send(error))
app.set("port", process.env.PORT || 3001)

require('../routes/hello')(app)
require('../routes/create-customer')(app)
require('../routes/create-subscription')(app)
require('../routes/cancel-subscription')(app)

module.exports = app
