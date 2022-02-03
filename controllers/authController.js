const {promisify} = require('util')
const User = require("../models/UserModel")
const jwt = require('jsonwebtoken')
const AppError = require('./../utils/AppError')
const CatchAsync = require('./../utils/CatchAsync')
const { findOne } = require("../models/UserModel")

const signToken = (id,res) =>{
    let token = jwt.sign({id},process.env.JWT_SEC,{
        expiresIn: process.env.JWT_EXPIRES_IN
    })
    const cookieOption = {
        expires : new Date(Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        // secure:true,
        httpOnly:true
    }
    res.cookie('jwt',token,cookieOption)
    return token;
}
exports.signup = async (req,res) =>{
        try{
            const user = await User.create({
                name : req.body.name,
                email : req.body.email,             
                photo:req.body.photo,
                password : req.body.password,
                passwordConfirm : req.body.passwordConfirm
            })
            const token = signToken(user._id,res)
            res.status(201).json({
                status: "success",
                token,
                user
            })
        }
        catch(err){
                res.status(400).json(err);
       
            }

}

exports.login = CatchAsync(async (req,res,next) => {
    let {email,password} = req.body

    password = String(password);
//check  if email and password exist
    if(!email || !password){
        return next(new AppError('Please provide email and password',400))
    }

    //check if user exist and password is correct
    const user = await User.findOne({email}).select('+password')

    if(!user || !await user.correctPassword(password,user.password)){

        return next(new AppError('Incorrect email or password',401))
    }
    
    //if everything ok send token to the client
    const token = signToken(user._id,res)
    user.password = undefined;
    res.status(200).json({
        status : 'success',
        token,
        user
    
    })
})

exports.protectTo = CatchAsync(async(req,res,next) =>{
    //1check token exists
let token ;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
 token = req.headers.authorization.split(' ')[1]

}
if(!token){
    return next(new AppError('You are not into loggin .Please login',401))
}
//2verification token
    const decoded = await promisify(jwt.verify)(token,process.env.JWT_SEC)
  
    //3Check user still exist
    const currentuser = await User.findById(decoded.id)
    if(!currentuser){
        return next(new AppError('the user beloging to this token does not exist'))
    }

req.user = currentuser;

    next()
    
})


exports.restrictTo = (role) =>{
   
  
    return (
        CatchAsync(async(req,res,next) =>{
          
            if(role !== req.user.role){
                    return next(new AppError('You dont have permission to access this',403))
                }
                next();
            })
            
    )
 
}
