function greet(name){
    console.log(name);
}

function returnval(username){ // undefined => false
    if(!username){
        console.log("please Enter your name-");
        return;
    }
    return `${username} just logged in...` // it is a template literal 
}

function defpara(name="sam"){// if value pass it override the sam value otherwise sam print
    console.log(name);
}

greet("keshav Garg");
// console.log(returnval("Raj"));
console.log(returnval()); // If I don't pass anything then undefined pass 
// defpara()
defpara('Ram sharma');

//function expression
let exp=function(n1,n2){
    return n1+n2;
}

console.log(exp(2,3));

//Named function expression
let nameexp=function sum(n1,n2){
    return n1+n2;
}

console.log(nameexp(3,7));

//Rest(collect ) and spread(expands) operator in js

function summanyval(val1,val2,...arr){// rest operator(collect)
    let sumarr=0;
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        sumarr+=arr[i];
    }

    return val1+val2+sumarr;
}

let arr=[1,2,3,4,5,6,7,8]
console.log(summanyval(...arr));
//spread operator(expand)

//function with object.
function handleobj(obj){
    return `${obj.username} is living in ${obj.city}`;
}

console.log(handleobj({ username: "keshav", city:"Ghaziabad"}));
let obj={
    username:"Ram",
    city:"Ayodhya"
}
console.log(handleobj(obj));

//function with array

function myarr(arr){
    return arr[1];
}
let array=[23,4545,656]

console.log(myarr([12,344,56]));
console.log(myarr(array));



