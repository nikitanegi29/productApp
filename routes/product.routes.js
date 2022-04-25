const productModel = require('../Model/product.model.js')
const router=require('express').Router()

router.get("/products",async (req,res)=>{
    try{
        await productModel.find({})
        .then((data)=>{
            res.send(data)
        })
    }catch(err){
        console.log(err)
    }
})

router.get("/product/:id",async(req,res)=>{
    try{
        await productModel.find({_id:req.params.id})
        .then((data)=>{
            res.send(data)
        })
    }catch(err){
        res.send("Unable to get the product")
        console.log(err)
    }
})

router.post("/insertproduct",async(req,res)=>{
    const Data=  productModel(req.body)
    try{
        await Data.save()
        res.send(Data)
    }catch(err){
        res.send("Unable to insert data")
        console.log(err)
    }
})

router.patch("/update",async(req,res)=>{
    try{
        await productModel.updateOne({_id:req.params.id},{$set:req.body})
        .then((data)=>{
            res.send(data)
        })
    }catch(err){
        res.send("Failed to update")
        console.log(err)
    }
})

router.delete("/delete",async(req,res)=>{
    try{
        await productModel.deleteOne({_id:req.params.id})
        .then((data)=>{
            res.send(data)
        })
    }catch(err){
        res.send("Failed to delete the product")
        console.log(err)
    }
})

module.exports=router;