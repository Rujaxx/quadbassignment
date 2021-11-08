const express = require('express')
const dotenv = require('dotenv')
const db = require('./config/db')

//Env Vars
dotenv.config({ path : './config/config.env'})


//
// db.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });    

//Check db
db.authenticate().
then(console.log('Connection has been established successfully.'))
.catch(error => console.error('Unable to connect to the database:', error))

//Route Files
const user = require('./routes/user')
const auth = require('./routes/auth')

const app = express()

//body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//Mount Routers
app.use('/', auth,user)

//Port
const PORT = process.env.PORT ||3000

const server = app.listen(PORT,console.log(`App is listening at ${PORT}`))