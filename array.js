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
        console.log("These are all ages, we have in this table:")
while (cont<qt){
        
        console.log(students[cont].age)
        console.log("========")
    cont ++ 
}
