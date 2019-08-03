let students = [
    {name: "Jephte", age: 18},
    {name: "Jackson", age: 18},
    {name: "Maxlor", age: 19},
    {name: "Luc", age: 20},
    {name: "Meril", age: 20},
    {name: "Johnny", age: 21},
    {name: "Azor", age: 21},
    {name: "Kenley", age: 20},
    {name: "Dareus", age: 18},
]

let par= students.length
let totalAge=0

for(i=0; i<par ; i++){
                      totalAge = totalAge + students[i].age
             } 
console.log(totalAge)

//ES6 MAP
let ageOf = students.map(student => student.age)
console.log(ageOf)

// ES5 MAP
let ageOfStud = students.map(function(e){
    return e.age;
})

console.log(ageOfStud)

//How to calculate the average of students ages
//Reduce ((acc,val,index,arr),initValue)

console.log("====================== Chaining method ==========================")

let totalAgeRev = students.map(student => student.age).filter(age => age ==20).reduce((acc,val)=>{
    return acc + val
})

console.log(totalAgeRev)

console.log("====================== Add 2 for all age students ==========================")

let Addage = students.map(student => student.age+2)

console.log(Addage)

