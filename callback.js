
function sayhello(){
    console.log("hello func...");
    
}
function sayhi(){
    console.log("hi func...");
    
}

function add(a,b,callback){ //callback means when we pass a function as an argument in the function.
    console.log(a+b);
    callback();
    
}

add(2,3,sayhello);
add(2,3,sayhi);
add(2,3,function(){ console.log("anonymous func...");
})

// console.log(add(2,3);
