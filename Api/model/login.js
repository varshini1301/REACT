// const mongoose = require('mongoose')
// import { Mongoose } from "mongoose";
import {mongoose} from "mongoose"
// mongoose.connect('mongodb://127.0.0:27017/Register');

const RegisterSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String
})

export const regiterModel = mongoose.model('login',RegisterSchema)
