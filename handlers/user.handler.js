const userhandler = {}

userhandler.handlerError = (error) => {
    let errorData = {username:"",password:""}

    if(error.code ===1000){
        errorData.username = "the username is not available"
        return  errorData
    }

    if (error.message.includes("user validation failed")){

        object.value(error.error).forEach(({properties})=>{
            errorData[properties.path]= properties.message
        })
    }
}

module.exports =userhandler