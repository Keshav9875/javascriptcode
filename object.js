
//Interview question create key with objects...
const mysym= Symbol("a234") //a234 is a description.
const jsuser={
    firstname:'keshavGarg',
    Age:20,
    [mysym]:"mykey",// This is the value of symbol.
    sayhello(){// this is also the way to create function in object after es6 this concept introduced...
        console.log("hello");
    }
}

// console.log(` Age = ${jsuser.age} and Name = ${jsuser.name} `);
// console.log(jsuser["name"]);
// console.log(jsuser[mysym])
// jsuser.age=21;
// console.log(jsuser.age);
// // Object.freeze(jsuser)
// jsuser.age=23
// console.log(jsuser.age);
jsuser.greeting=function(){
    console.log("hello! Google baba");
}

// console.log(jsuser.greeting)
// jsuser.greeting()

let obj2={
    age:234,
    name:"tutankhama"
}
// let obj3=Object.assign({},jsuser,obj2);
// console.log(obj3);

let arrayofobj={
    
        Id:1,
        alpha:'a',
        obj2:{
            Id:2,
            alpha:'b'
        }
    
  
}

// console.log(arrayofobj[0].id);
// console.log(arrayofobj[1].id);
// console.log(arrayofobj[2].id);
// console.log(Object.keys(jsuser));
// console.log(Object.values(jsuser));
// console.log(Object.entries(jsuser));

// let obj ={...jsuser,...obj2,...arrayofobj}
// console.log(obj)
// console.log(obj.obj2.alpha);

//object destrcuture...
const {firstname:name}=jsuser;
console.log(name)

