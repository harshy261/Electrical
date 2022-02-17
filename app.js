import express from 'express'
import connectDB from './db/connectdb.js'
import createDoc from './models/Contact.js'
import web from './routes/web.js'
const app = express()


const port = process.env.PORT || '3300'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"



// DATABASE CONNECTION
connectDB(DATABASE_URL)


app.use(express.urlencoded({extended:false}))  
app.use(express.json());


// CREATE AND SAVE DOC
createDoc()


// SET TEMPLATE ENGINE
app.set('view engine', 'ejs')



// STATIC FILES
app.use(express.static('public'))




// LOAD ROUTES
app.use('/', web)



// SERVER LISTENING
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})

