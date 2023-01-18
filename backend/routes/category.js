const express = require('express')
const {GetAll, AddCategory} =require('../Controller/categoryController')
const CategoryRouter=express.Router()
CategoryRouter.get('/',GetAll)
CategoryRouter.post('/',AddCategory)
module.exports=CategoryRouter