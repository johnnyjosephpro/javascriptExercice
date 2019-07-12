/* 
Project: E-Market
Date: 18 Juin 2019
Nom: Johnny Joseph
*/

//Create variable name and constante with CamelCase
const projectName="E-Market" 
let holdName="Johnny Joseph"

//Display name of project
console.log("Welcome to " + projectName)

//Create another variable 
let userBalance=5000
let shoePrice=200

//Condition with IF
if (userBalance > shoePrice){
    console.log(holdName+ " You can buy Shoe.")
    console.log("Thanks for the purchase")
}
else if(userBalance==shoePrice){
    console.log("Thanks for the purchase, please add money to your balance. " + holdName)
    
}else if (userBalance < shoePrice){
    console.log("Sorry, insufficient fund. " + holdName)
}

//Create a switch condition
let choice=(3)

switch (choice){
    case 1:
    console.log("Profil")
    break
    case 2:
        console.log("Setting")
        break
        case 3:
            console.log("Log Out")
            break
            case 4:
                console.log("Cart")
                break
}