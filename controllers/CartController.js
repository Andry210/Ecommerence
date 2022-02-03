const Cart = require('./../models/CartModel')
const AppError = require('./../utils/AppError')
const CatchAsync = require('./../utils/CatchAsync')

exports.getAllCart  = CatchAsync(async(req,res,next)=>{

    const carts = await Cart.find();
    
    res.status(200).json({
        carts
    })

})

exports.CreateCart  = CatchAsync(async(req,res,next)=>{
    const cart = await Cart.create(req.body);
    res.status(201).json({
        data:"success",
        cart
    })
})
// exports.getCart  = CatchAsync(async(req,res,next)=>{
//     const cart = await Cart.find(
//         user : 
//     )
// })
exports.updateCart  = CatchAsync(async()=>{


})

exports.DeleteCart  = CatchAsync(async()=>{


})

