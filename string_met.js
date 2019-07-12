/*
Johnny JOSEPH
Full Stack Web Developer
*/

//Finding the lenght of the string
    console.log("=======================================================")
const str = "What is the main purpose of using JavaScript when creating a website?"
    console.log("This string has " +str.length +" characters")

    console.log("=======================================================")
//Removing white space
const str1 = "               It allows for the addition of more pages of content. "
    console.log(str1.trim())

    console.log("=======================================================")
//Determine if string conatains substring
const author="Mackenson Jean Baptiste"
const userSearchTerm1="Mackendy"
const userSearchTerm2="Jean Baptiste"

    console.log(author.includes(userSearchTerm1))
    console.log(author.includes(userSearchTerm2))

    console.log("=======================================================")

//Finding the index of substring
    console.log(author.indexOf(userSearchTerm1))
    console.log(author.indexOf(userSearchTerm2)) //Explication
    console.log("=======================================================")

//Check if the index is greater than -1
const userSearchTerm="Jean Baptiste"
const stringIncludesSubstring = author.indexOf(userSearchTerm) > -1
        if (stringIncludesSubstring){
    console.log("We found a matching author")
}

    console.log("=======================================================")
//Capitalizes entire string
const str2 = "It allows for dynamic behavior in the website"
    console.log(str2.toUpperCase())

    console.log("=======================================================")
//Lower cases entire string
const str3 = "IT allows the PROGRAMMER to FORMAT the CONTENT"
    console.log(str2.toLowerCase())

    console.log("=======================Replaces strings with new values ================================")
//Replaces strings with new values
const str4 = "Hello word! My name is also world. How funny."
const stringPattern = "word"
const regexPattern = /world/gi //Explication
const replacement = "XTECH"

    console.log(str4.replace(stringPattern, replacement))
    console.log(str4.replace(regexPattern, replacement))

    console.log("======================Return a section of a string =================================")
//Return a section of a string
const str5 = "User input: Hello there friends!"
    console.log(str5.slice(12))

    console.log("=======================================================")
const str6 = "Random characters fjhgjhgjhgj posted by-XTECH"
const usernamePrefixIndex = str6.indexOf("-") + 1 //Explication
const username = str6.slice(usernamePrefixIndex)
    console.log(username)

//Part2
    console.log("===================== Part2 =============================")

let str7 = "Adjust your learning schedule around family, friends, and your job."
    console.log(str7.slice(20))

    console.log(str7.slice(6,17))

    console.log(str7.slice(-5))

    console.log(str.slice(-9, -6))
    console.log("=================== Convert string into an array of strings ====================================")

//Convert string into an array of strings
const str8 = "Build projects and get real-world experience."
const words = str8.split(" ")
const wordCount = words.length

    console.log(words)
    console.log(wordCount)

const strColumns = "username:firstName:lastName:email"
const columnIds = strColumns.split (":")
    console.log(columnIds)

    console.log("========================Repeats a string a specified number of times===============================")

//Repeats a string a specified number of times
const str9 = "Bonjour le monde. | "
    console.log(str9.repeat(4))

    console.log("============================Returns array of matching strings===========================")

//Returns array of matching strings
let paragraph = "Internalize new concepts with additional content and quizzes."
let regex = /[A-Z]/g //Explication
let found = paragraph.match(regex)
    console.log(found)

    console.log("==========================Returns the character at an index=============================")

//Returns the character at an index
const str10 = "Bonjour le monde"
    console.log(str10.charAt(0))
    console.log(str10.charAt(9))

    console.log("==========================Return the unicode at an index=============================")

//Return the unicode at an index
const str11 = "Bonjour le monde"
    console.log(str11.charCodeAt(0))
    console.log(str11.charCodeAt(8))
    console.log(str11.charCodeAt(12))

    console.log("=======================================================")


