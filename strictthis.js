"use strict";

console.log(this)

let obj={
    name:"keshav",
    greet:function(){
        console.log(this)
    }
 }

 obj.greet()
 //In strict mode it will give undefined...
 function a(){
    console.log(this);
 }
 a();

 //Arrow function
 const chai=()=>{
    console.log(this);
 }
 chai();

 const obj2={
    a:2,
    b:function(){
        const y=()=>{
            console.log(this)
        }
        y()
    }

 }

 obj2.b();

 const obj3={
    a:2,
    b:function(){
      
            console.log(this)
       
    }

 }

 obj3.b();


 //it will the {} object due to enclosing lexical enviornment...
 const obj4={
    a:2,
    b:()=>{
      
            console.log(this)
       
    }

 }

 obj4.b();