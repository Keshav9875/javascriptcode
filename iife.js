// IIfe in js

(function (){ // unnamed iife
    console.log("hello I am iife function");
})();

(()=> { // unamed iife by arrow function
    console.log("hello I am iife by arrow...")
})();//Two iifes together.

(function greet(name){// Named iife which take parameter also.
    console.log(`hello ! ${name}`);
})('jennifer');//Three iifes together.

let iifeval=((num, num2)=> `${num+num2}`)(1,2);// iife which return the value...
console.log(iifeval);//Four iifes together.

var v="global scope";// Avoid polluting the global scope and avoid naming collision also by iife...

(()=> {
    var v="local scope";

    console.log(v);
})();
console.log(v);

//By creating private and public variable by iife.
let exec=(function(){
    var count=0;
    return {
        increment:function(){
            return ++count;
        },
        resetval:function(){
            count=0;
        }
        
    }
})();

console.log(exec.increment());
console.log(exec.increment());
console.log(exec.increment());
exec.resetval();
console.log(exec.increment());