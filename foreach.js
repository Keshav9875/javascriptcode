// let arr=[1,"keshav",true,false,12.34]

// // arr.forEach(function(item){
// //     console.log(item);
// // })

// //by arrow function
// arr.forEach((item)=>{
//     console.log(item);
// })

// //another way if function is complex
// function printme(val, index, arr){
//     console.log(`${val},and ${index},and ${arr}`)
// }

// arr.forEach(printme);

// // foreach contains val, index and arr

// arr.forEach((item, index,arr)=>{
//     console.log(`${item},${index} and ${arr}`)
// })

// json value iteration

const arr1=[{age:34,name:"a"},{age:23,name:"b",happy:"yes"}]
arr1.forEach((item)=>{
    console.log(item.age);
})

//foreach doen't return anything 

const val=arr1.forEach((item)=>{
    // console.log(item.happy);
    return item.happy
})
console.log(val);

