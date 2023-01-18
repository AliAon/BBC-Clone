const News = require("../models/newsSchema")

exports.GetNews=async(req,res)=>{
    try {
     const result=await News.find()
     res.json(result)
    //    res.send('GET News')
    } catch (error) {
        res.send('error')
    }
}

exports.AddNews=async(req,res)=>{
    try {
     const result=await News.create(req.body)
     res.send('News Added')

    } catch (error) {
        res.send('error')
    }
}
