
//filter method of array

let mynums =[1,2,3,4,5,6,7,8,9,10];
// const num=mynums.filter((num)=> num>4)
// console.log(num);
// console.log(mynums);
// const num=mynums.filter((num)=>{ return num>4})
// console.log(num);

// const num=mynums.filter(function a(mynums){
//     mynums>4
// })

// console.log(num);//The filter function in JavaScript works by iterating over each element in the array and applying a callback function to each element. If the callback function returns true for an element, that element is included in the new array that filter returns. If the callback returns false, the element is excluded.

// own implementation of filter by foreach() method.

// const nums=[];
// mynums.forEach((num)=> {
//     if(num>4){
//         nums.push(num)
//     }
// })

// console.log(nums);

//map method of array

// let newarr=mynums.map((num)=>num+10)
// console.log(newarr);
// console.log(mynums);

//own implementation of map


// let mynums=[1,2,3];
// let newarray=[];

// mynums.forEach((item)=>{
//     item=item+10
//     newarray.push(item)
// })

// console.log(newarray);


//Reduce() method of array.

let total=mynums.reduce((acc,currval)=>acc+currval,0)
console.log(total);

// own implementation of reduce() method

let reduce=function(mynums){
    let sum=0;
    for(let val of mynums){
        sum=sum+val;
    }
    return sum;
}

console.log(reduce(mynums));
