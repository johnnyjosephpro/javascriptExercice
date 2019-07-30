//let arr=[1,2,3,4,5]
//console.log(arr[1])


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



let ages=students.map(student => student.age)

console.log(ages)