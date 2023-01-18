const express = require('express')
const app = express()
const newsRouter=require('./routes/news')
const CategoryRouter=require('./routes/category')
const cors = require('cors')
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  }))
app.use(express.json()) // for parsing application/json
app.use('/api/news',newsRouter)
app.use('/api/categories',CategoryRouter)
module.exports=app