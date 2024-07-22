//MIDDLEWARE 
//custom API response and error handling

// const asyncHandler = ()=>{}
//hum yahan pe promises vala async handler use krenge
//koi bhi approach use krle
//approach-1 promises approach
//utility function use krk
//there are 2 types of promises resolve and reject

const asyncHandler=(requestHandler)=>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err)).
        catch((err)=>next(err))
    }
}

export {asyncHandler}





//APPROACH-2 try-catch approach
// export {asyncHandler}

// const asyncHandler = (fn) => async(req,res,next) => {
//     try{
//        await fn(req,res,next)
//     }
//     catch(error){
//       res.status(err.code || 500).json({
//         success:false,
//         message:err.message
//       }) //error ke andr ya to response code aajeyga ya to nahi aayega
//     }
// }

//NOTE==
//ye trika hota hai db se baat krne ka ab ye humaraepaas async function hai humare paas

//step by step explanantion of above statement
//the above statement means the same as
//step-1 ==callback
// const asyncHandler=()=>{} 

//step-2    
// const asyncHandler = (func) => {() => {}} 
//bas upr curly braces htaye huye

//step-3
//ab isi ko async bnana ho toh hum kuch nhi bas usk aage async keyword lgadenge
// const asyncHandler = (func) => async () => {} 

//asyncHandler is a higher order function
//higher order functions are those function sjinko hum as a paramter bhi le skte hain ya fr return bhi kr skte hain==>just basically treated as a variable only