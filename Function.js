/*
//ES5
function add(a, b) {
    return a + b
} 

//ES6(arrow function)
const addition = (a, b) => {
    return a + b
}

const concat = (premierMot, deuxiemeMot) => {
    return premierMot + deuxiemeMot
}

const total = (a, b) => {
    let c = "Le total est: "
    let d = a + b
    return c + d
}

const noParam= () => {
    console.log("Hello, World")
}
*/
/*
//With Split
let fullName = "Johnny Joseph"
let decompName = fullName.split (" ")
let lastName = decompName [0]
let firstName = decompName [1]

    console.log(lastName)
    console.log(firstName)

*/
        console.log("==============================================================================")
//Function Square Number
let val= 76

const square=(val) =>{
    return val*2
}
        console.log("La racine caree de " + val + " est "+ square(val))      

//Function of half number
let number=12

const half = (number) => {
    return number/2

}
        console.log("La moitie de "+ number + " est "+ half(12))

//Function string to uppercase
const str= "Je suis disponible."

const upperCase=(str) => {
    return str
}
        console.log(str.toUpperCase(),typeof(str))



/*Create a condition that output "Good Morning" when time is between 6-11, 
"Good afternoon" when time is between 12-18, 
"Good evening" when time is between 19 and 24. And "Hello" for all other case
The exam will include technical questions. Please study the definitions */

let Time=5

if (Time>=6 && Time<=11){
    console.log("Good Morning")
}
if (Time>=12 && Time<=18){
    console.log("Good afternoon")
}
if (Time>=19 && Time<=24){
    console.log("Good evening")
}
    console.log("==============================================================================")

/*Create an object person, with those properties, name, age, race, nationality, sex. 
And display or output each of these propoerties value
Create an array of the course list you’re taking.
Create an object student, that has these properties: age, name, sex, school, and course(which is an array). 
So that you have an object that contain an array. access all the properties, and each array items.
Create an array Xtech that has object student, and that object has properties like name, sex. */

const person={
        name: "Johnny Joseph",
        age:33,
        race: "Black",
        nationality: "Haitienne",
        sex: "Masculin"
}
    console.log(person.name)
    console.log(person.age)
    console.log(person.race)
    console.log(person.nationality)
    console.log(person.sex)

const courses=["JavaScript","SGBD","Python","HTML","Project"]

//Objet student
let student = {
        age:33,
        name:"Johnny Joseph",
        sex:"Masculin",
        school:"X-TECH Universite",
        schoolCourses: [courses[0],courses[1], courses[2],courses[3],courses[4]]
    }

const Xtech=[

    student={
        name: "Jean Paul",
        sex: "Masculin"
    }
]
    console.log(Xtech[0])












