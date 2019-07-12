//JAVASCRIPT EXAM 2

//Definition
/*Function: C'est un element qu'on peut ajouter des parametres et retourner des valeurs qui peut numerique ou caractere, 
variable: C'est un element qu'on peut changer de valeur a tout au long du programme.
const vs let: const un element qui a des valeurs constantes tandis que let est un element qu'on peut changer des valeurs.
Tell us 4 type of variable: Bolean, String, Number, Null
*/


//1- Create a single line comment and a multiline comment

    //This is a single comment

    /* You
    can use 
    this multiple comment */

//2- Create a constante, create a variable.   

    const name="Johnny Joseph"
    let school

/*3- Create an arrow function that calculate the  calculate the distance, 
and display result in km. distance = speed * time */
    let distance
    const calculate=(speed,time) =>{
        return distance=speed * time
    }
        console.log("La distance est de: "+ calculate(238,8)+ "Km")

//4- Create a while loop that display your name 10 times.
    let conteur=1
   while(conteur<=10){
        console.log("Johnny Joseph")
        conteur++
   }


//5- Create a switch that if option = 1 display “Good”, if option = 2 display “Bad”, if option = 3 display “Very Good”
    let a=1
    switch(a){
        case 1:
            console.log("Good")
        break
        case 2:
            console.log("Bad")
        break
        case 3:
            console.log("Very Good")
        break

    }

//6- Create an array cats, that contain many object of cat, each cat has a name and age, and access the properties.
    let cat1
    let cat2
    const cats=[
        
        cat1={
            name: "Manou",
            age: 7
        },
        
        cat2={
            name: "Pati",
            age: 2
            }
        ]
    console.log(cats[0],cats[1])
