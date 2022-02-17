import mongoose from 'mongoose'

// DEFINING SCHEMA
const contactSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    phone: {type:Number, required:true},
    message: {type:String, required:true}
})

// COMPILING SCHEMA
const userModel = mongoose.model('user', contactSchema)


export default userModel



