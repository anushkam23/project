//is file me mongoose ka database connect krenge
//DB is an another continent
//constants.js in loading in this db file
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB=async()=>{
    try{
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGODB connection FAILED ",error);
        process.exit(1) //here 1 is the exit process code
    }
}

export default connectDB

//after writing the above code import to index.js in src folder