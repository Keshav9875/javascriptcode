const arr =[1,2,3,45,5]

for(const num of arr){
    console.log(num);
}

const greetings="hello world";

for(const num of greetings){
    console.log(num);
}

const map =new Map();
map.set(1,"a");
map.set(2,'b'
);
for (const num of map) {
    console.log(num);
}

for(const [k,v] of map){
    console.log(k,v);
}

// const myobj={   
//     game1:'tekken 3',
//     game2:'subway surfer',

// }

// for (const val of myobj) {//Throw error object is not iterable.
//     console.log(val);
// }

//for in loop
const myobj={   
    game1:'tekken 3',
    game2:'subway surfer',

}

for (const key in myobj) {
    console.log(`${myobj[key]}`);
}


