let sumtwo=(num1,num2) => {
    return num1+num2;
}
console.log(sumtwo(3,4));

//2nd way to define arrow function(implicit return)
let addnum=(a,b) => a+b
console.log(addnum(3,7));

//3rd way to define arrow function which is used alot in reactjs...
let Add=(a,b) =>(a+b)
console.log(Add(3,78));

//4th way to return object in arrow function implicitly
let retobj=(obj) => ({name:"keshav"})

const obj={
    name:"keshav",
    age:21,
}
console.log(retobj(obj));

//arguments keyword

function arg(){
    return arguments;
}

console.log(arg(23,5,6,4,6,78,8));

let args=()=> arguments                 //doesn't work in browser arguments keyword.
console.log(args(23,345,456345.4));

