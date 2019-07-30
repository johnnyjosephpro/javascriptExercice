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
