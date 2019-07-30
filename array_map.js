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

let i = 0
let cont= students.length
let stud = []

while (i<cont){

    if(students[i].age == 20){
        stud.push(students[i])
    }
    i ++
}
    console.log(stud)
    console.log("============================================================================")
    //Methode filter return Array
let studs= students.filter(student => student.age == 21)
    console.log(studs)



