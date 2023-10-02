require('dotenv').config()


const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const router = require('./router/authRouter')
const dataRouter = require('./router/dataRouter')
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000
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

app.use('/api',router)
app.use('/api',dataRouter)
app.listen(port,()=>{
    console.log(`SERVER@${port}`);
})