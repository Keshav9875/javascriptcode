// Math object all member is static
console.log(Math.abs(-4))
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4,54,54,1.2));// Give min value in array
console.log(Math.max(4,54,54,1.2));// Give max value in array

//Generating random number between two values inclusive...
let min=15;
let max= 30;
console.log(Math.floor(Math.random()*(max - min+1))+min)