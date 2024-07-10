
//Memory management in js (stack or by heap uses mark and sweep algo for garbage collection automatically...)
let name="keshav"

let obj={
    name:"xyz",
    age:0,
    gender:"m"
}

let name2=name
name2="Johny"
console.log(name2)
console.log(name)

obj.name="harsh"
obj.age=17
obj.gender="m"

console.table([obj.name,obj.age,obj.gender])
let obj2=obj
obj2.name="Rampal"

console.log(obj2.name)
console.log(obj.name)
