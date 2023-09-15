require('dotenv').config()

const express = require('express')

const app = express()

const port = process.env.PORT
const mongo_url = process.env.MONGO_URL

app.listen(port,()=>{
    console.log(`SERVER@${port}`);
})