try{
    // Sum();
    let i=2;
   const err =new Error("hello give i to zero ") //with the help of error constructor we can create our own custom error...
    if(i!=0){
        throw err;
    }

    console.log("I am in try block");
    
}
catch(error){
    if(error instanceof ReferenceError){
        console.log(error);
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }
    else{
        console.log(error);
        
    }
}
finally{
    console.log("hello I am finally...");
    
}

