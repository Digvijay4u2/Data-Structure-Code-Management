const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
   
})

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
        //this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next()
})


const User = mongoose.model('USER', userSchema)

module.exports = User