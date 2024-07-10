let mydate= new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
let mycreateddate= new Date(2023,1,22)
console.log(mycreateddate.toString())


let timestamp = Date.now()
console.log(timestamp);
console.log(mycreateddate.getTime());

//in second
console.log(Math.floor(Date.now()/1000))
let mydated=new Date()
console.table([mydated.getTime(),mydated.getFullYear(),mydated.getDay(),mydated.getMonth()])
