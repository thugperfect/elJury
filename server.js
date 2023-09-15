require('dotenv').config()


const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT
const db = process.env.MONGO_URL

mongoose.connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})

mongoose.connection.on('error',(err)=>{
    console.log("MongoDB ==> Disconnected");
    console.log(err);
})
mongoose.connection.once('open',()=>{
    console.log('MongoDB ==> Connected')
})

app.listen(port,()=>{
    console.log(`SERVER@${port}`);
})