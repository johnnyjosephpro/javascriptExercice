//Let me using Array for a square

let students = [
    {name: "Jephte", age: 27},
    {name: "Jean", age: 18},
    {name: "Max", age: 19},
    {name: "Pierre", age: 14},
    {name: "Joseph", age: 16},
]

let cont=0
let qt=students.length

while (cont<qt){
        console.log(students[cont].age)
        console.log("========")
    cont ++ 
}

// Function return Array
//let sqrtage=Math.sqrt(students[cont].age)
        console.log("The Square of Array is: ")
let ages=students.map(student => Math.sqrt(student.age).toFixed(2))
    console.log(ages)

