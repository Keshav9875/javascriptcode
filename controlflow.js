//if ,if else , if elseif else
let arr=[];
arr.push(23);
arr.push(34);
// console.log(arr);

if(arr.length===0){
    console.log("This array is empty");
}
else{
    console.log(arr.length);
}

// checking object is empty or not

let obj={};
if(Object.keys(obj).length===0){
    console.log("this object is empty.");
}
else{
    console.log("not empty");
}

//nullish coalescing operator.
let val=null
console.log(val??20);

//optional chaining operator.
let object={
    age:20,
    name:"hello",

}
console.log(object.greet?.name);
