 //In non strict mode
 //In node enviornment this gives {}  empty object in non strict mode.
 console.log(this)
 //In browser it gives window object

 let obj={
    name:"keshav",
    greet:function(){
        console.log(this)
    }
 }

 obj.greet()

 //In function
 function a(){
    console.log(this);
 }
//  a();

 const chai=()=>{
    console.log(this);
 }
 chai();

 