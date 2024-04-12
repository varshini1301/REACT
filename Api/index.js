// const express = require('express')
import express from 'express'
// const mongoose = require('mongoose')
import mongoose from 'mongoose'
import cors from "cors"
// const regiterModel = require('./model/login')
// const cors =require('cors')
// import {connectToMongo} from './db.js'


import { regiterModel } from '../Api/model/login.js'


const app = express()
app.use(express.json())
app.use(cors())
// import {connectToMongo} from './db.js'
// const connectToMongo = require('./db.js')
// connectToMongo();
mongoose.connect('mongodb://127.0.0:27017/Register');
console.log("connected");

app.post('/register', (req, res) => {
    const { name, email, Password } = req.body;
    regiterModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Already have an account")
                console.log("user:",user);
            }
            else {
                regiterModel.create({ name: name, email: email, password: Password })
                    .then(result => res.json("Account Created"))
                    .catch(err => res.json(err.message))
            }
        }).catch(err => res.json(err.message))
})



app.listen(3000, () => {
    console.log('server is running');
})