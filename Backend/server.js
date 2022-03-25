const express = require('express')


const app = express()
// const mysql = require('mysql')
const port = 3001
const cors = require('cors')
// const router = express.Router()
// const req = require('express/lib/request')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
app.use(cors())
app.use(express.json())

app.use('/student', require('./routes/student'));
app.use('/faculty', require('./routes/faculty'));




<<<<<<< HEAD
=======












>>>>>>> 15ef8b6a3505183c9d2bd5fa5a344eeda9ba849d
app.listen(port, ()=>{
    console.log(`yey Your server is running in port ${port}`)
})
