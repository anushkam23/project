//run files using npm run dev

//index.js db file imported here in this file
//FOR CONNECTING DATABASE
//APPROACH-1 == take another file write code there in index.js in db folder and import here

// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";

//method-1
// require('dotenv').config({path: './env'}) 

import dotenv from "dotenv" //method-2
import connectDB from "./db/index.js";

dotenv.config({
  path:'./env'
})

connectDB()

//in package.json write -r dotenv/config --experimental-json-modules along with nodemon src/index.js kyuki this a experimental feature
// "scripts": {
//     "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
//   },

//APPROACH-2    
//agar database dusre continent me hai to async await use ki hai  
/*
//try-catch or async-await

//for connecting database

//method-1
// import mongoose from "mongoose";
// function connectDB(){}
// connectDB()


//method-2 using async-await iffy and we use try catch here
//always use try catch in a database to avoid errors
import mongoose from "mongoose";
import {DB_NAME} from "./constants";
//also initialise app joki express se bnti hai
import express from "express"
const app=express()

(async () => {
  try{
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  app.on("error", (error)=>{
    console.log("ERROR: ",error);
    throw error
  }) //listener use here with app with error event==>use kia taki hoskta hai ki express ki app h vo baat n kr pari hai aur bhi bahut sare reasons hoskte hain
app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`)
})
}
  catch(error){
    console.error("ERROR: ",error) //console.error ki jgh console.log bhi likh skte hai doesnt matter
    throw err
  }
})()

*/