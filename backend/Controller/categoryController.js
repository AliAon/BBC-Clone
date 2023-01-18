const Category=require('../models/categorySchema')
exports.GetAll=async(req,res)=>{
    try {
     const result=await Category.find()
     res.json(result)
    } catch (error) {
        res.send('error')
    }
}
exports.AddCategory=async(req,res)=>{
    try {
     const result=await Category.create(req.body)
     res.send('Category Added')

    } catch (error) {
        res.send('error')
    }
}
