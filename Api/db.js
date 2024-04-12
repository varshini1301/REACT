// // const mongoose = require('mongoose');
// import{mongoose } from 'mongoose'
// const mongoURI = "mongodb://127.0.0:27017/Register"

// const connectToMongo = async () => {
// try {
//     mongoose.set('strictQuery', false)
//     mongoose.connect(mongoURI) 
//     console.log('Mongo connected')
// }
// catch(error) {
//     console.log(error)
//     process.exit()
// }
// }
// module.exports = {connectToMongo};



// db.js

// const { MongoClient } = require('mongoose');

// // Connection URI
// const uri = 'mongodb://localhost:27017';
// const dbName = 'Register';

// async function connectToMongo() {
//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB server
//         await client.connect();
//         console.log('Connected successfully to MongoDB server');

//         // Connect to the database
//         const db = client.db(dbName);
//         return db;
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         throw error; // Rethrow the error for handling in the calling code
//     }
// }

// module.exports = { connectToMongo };
