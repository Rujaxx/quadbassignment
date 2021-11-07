const express = require('express')
const dotenv = require('dotenv')

//Env Vars
dotenv.config({ path : './config/config.env'})

const app = express()

//Port
const PORT = process.env.PORT ||3000

const server = app.listen(PORT,console.log(`App is listening at ${PORT}`))