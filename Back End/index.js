const express = require('express')
var cors = require('cors')
const app = express()
const mydb = require('./config/db')
const rout = require('./routes/route')
const _ = require('lodash') 
const bcrypt = require('bcrypt') 
const dotenv = require('dotenv')

dotenv.config({path : './.env'})

app.use(cors({
    origin: '*'
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(rout)




const port = 3006

app.listen(port, () => console.log(`server is runing`))