const express = require('express')
const {GetNews,AddNews} =require('../Controller/newsController')
const newsRouter=express.Router()
newsRouter.get('/',GetNews)
newsRouter.post('/',AddNews)
module.exports=newsRouter