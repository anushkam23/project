class ApiResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode < 400 
    }
}

//jab bhi koi error aye to api error ke through in send hogi
//server status code 