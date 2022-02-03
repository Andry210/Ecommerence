const express = require('express')

const Product = require('./../models/ProductsModel')

exports.getProducts = async (req,res) =>{

        const limit = req.query.limit
    const type = req.query.cat;
        let query =  Product.find() 
    try{
        if (type){ 
      query =  query.find(
          {
              cat: {
                $in: [type],
              },
            });
        }
        if(limit){
            query = query.find().limit(limit)
        }
        
      const  products = await query.find()
        
        res.status(200).json({
            products
        })
    }   catch(err){
            res.status(401).json(err)
    }
}

exports.createProduct = async (req,res) =>{
    try{
        const product = await Product.create(req.body) 
        res.status(201).json({
        data:{
            product
        }
        })
}catch(err){
        res.status(401).json(err)
    }
}


exports.updateProduct = async(req,res) =>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,
           { new:true,
            runValidators:true}
            )
            res.status(200).json({
                data:{
                    product
                }
            })
    }catch (err){
        res.status(404).json(err)
    }
}
exports.deleteProduct = async (req,res) =>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:"success",
            data : null
        })
    }catch(err){
        res.status(404).json(err)
    }
}
exports.getProduct = async (req,res) =>{
    try{
    const product =  await Product.findById(req.params.id)
        res.status(200).json({
            data:product
            
        })
}catch(err){
    res.status(404).json(err)
}

}