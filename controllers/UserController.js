const User = require('./../models/UserModel')
const CatchAsync = require('./../utils/CatchAsync')
const AppError = require('./../utils/AppError')
exports.getAllUsers = async(req,res) =>{
   
   try{
        const users = await User.find();

    res.status(200).json({
    
        status: "success",
        data:{
            users
        }
    })
}catch(err){
    res.status(404).json(err)
}
}

exports.getUser = async(req,res) =>{
    const user = await User.findById(req.params.id).populate('cart')
    res.status(200).json({
        user
    })       
}
exports.CreateUser = async(req,res) =>{

}

exports.UpdateUser= async(req,res) =>{

}

exports.DeleteUser =CatchAsync( async(req,res) =>{
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status:'success',
        data:null
    })

})