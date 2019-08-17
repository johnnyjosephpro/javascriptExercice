// Array of employee
const employee = [
    {name:"Luc", position: "Manager", salary: 10000},
    {name:"Meril", position: "Programmer", salary: 12000},
    {name:"Johnny", position: "Analyst", salary: 12000},
    {name:"Dareus", position: "Manager", salary: 13000},
    {name:"Azor", position: "Programmer", salary: 11000},
    {name:"Adelson", position: "Manager", salary: 10000},
    {name:"Jackson", position: "Manager", salary: 14000},
    {name:"Maxlor", position: "Manager", salary: 16000},
    {name:"Kenley", position: "Designer", salary: 10000}
 ]

//  1- Add 1000 to all the Manager salaries in a new array named employeeRaised.
// 2- Using the new array employeeRaised, add all the Manager salary that are higher than 12000

let employeeRaised=[]

employeeRaised= employee.filter(employe => employe.position=="Manager").map(addsal => addsal.salary+1000)
console.log("\nAdd 1000 to all the Manager salaries in a new array named employeeRaised:")
console.log(employeeRaised)
console.log("=====================================================================\n")


let cont= employeeRaised.length
let employeeRaisedSup=[]
let i=0

while (i<cont){
    if(employeeRaised[i]>=12000){
        employeeRaisedSup.push(employeeRaised[i]+1000)
        
    }
    i++
    
}
console.log("Using the new array employeeRaised, add all the Manager salary that are higher than 12000:")
console.log(employeeRaisedSup)

// Create a function that take an array of numbers and output the biggest number.
console.log("\n=====================================================================")

let numbers=[1,4,7,34,65,23,65,34,87,44,256,9]
let sup
// Premiere facon
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }

  sup=myArrayMax(numbers)
  console.log("Premiere facon: " +sup)

  console.log("\n=====================================================================")

//   let maximum=Array[0]

// for (i=0; i<Array.length; i++){

//     if (Array[i]>maximum)
//         maximum=Array[i]
// }
// console.log(i)


  //Deuxieme facon
let sup2=[]
  sup2=numbers.reduce((acc,val)=>{
      return Math.max(acc,val)
  })

  console.log("Deuxieme facon: " +sup2)