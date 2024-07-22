import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

//cookie-parser==> mere server se jo user ka browser haina uski cookies access kr paun aur ki cookies et kr paun aur cookies pe crus operations bhi kr paun
//app.use(cookieParser()) use krte hain iske liye
//ALSO
//secure cookies bhi create kr skte hain jo ki sirf server hi read and store kr skta hai


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

//the 3 major configurations that we genrally use are

app.use(express.json({limit:"16kb"}))  //this is a middleware jisme ki kitni value accept krna chahta hai app server and ye bs itn ahi nahi hai ye to apne form bhra to ye data lia
//ab url se data lena hai to iske liye bhi config krni pdti hai jese ki niche likhi hai
app.use(express.urlencoded({extended:true,limit:"16kb"}))

//another config for express to store files or folders or images to store in the server to ek public folder bnadete hain ki public assets hain
app.use(express.static("public"))

//"public" is the name of the folder here jo hum bna chuke hai jisme temp folder bhi rkha hua hai
export {app}

//we use app.use() when we want to do middleware or configuration settings
//like in cors

//another configuration for cookie-parser
app.use(cookieParser())

//pehle express humari json files ko asaani se nahi le pata tha thatswhy we used body-parser
