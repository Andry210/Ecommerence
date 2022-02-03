const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true,"please tell your name"]
    },
    email : {
        type:String,
        required:[true,"please provide your email"],
        trim : true,
        unique:true,
        validator : [validator.isEmail,'please provide a valid email']
    },
    photo:String,
    role:{
        type:String,
       default : 'user',
    },
    password : {
        type : String,
        required : [true,'password is required'],
        minlength : 5,
        select : false
    },
    passwordConfirm : {
        type : String,
           required : [true,"password confirm is required"],
           validate :{
           validator : function(el) {
               return el  === this.password
           
           },
           message  : "Paaswood are not the same"
       }
    },
    date : {
        type : Date,
        default:Date.now()
    }
  },
  {
      toJSON : {virtuals : true},
      toObject : {virtuals: true}
  }
) 
userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next()
    this.password =await bcrypt.hash(this.password,12)
    this.passwordConfirm = undefined;
})

userSchema.methods.correctPassword = async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword)
}

userSchema.virtual('cart',{
    ref : "Cart",
    foreignField :  'user',
    localField : '_id'
})
const User = mongoose.model('User',userSchema);
    
module.exports = User;