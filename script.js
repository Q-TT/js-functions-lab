/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  

  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
const isAdult = (x) => {
    if (x>=8){
        return "Adult"
    } else {
        return "Minor"
    }
}
console.log('Exercise 2 Result:', isAdult(21));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
const isCharAVowel= (x) => {
    if (x==="a"||x==="e"||x==="i"||x==="o"||x==="u"){
        // what if the list we need to chek is too long?
        return true
    } else {
        return false
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
const generateEmail=(x,y) => {
    return `${x}@${y}`
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
const greetUser=(x,y) =>{
    return `Good ${y}, ${x}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (x,y,z)=> {
    return Math.max(x,y,z)
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (x,y) => {
    return x*(y*0.01)
}
console.log('Exercise 7 Result:', calculateTip(50, 20));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).
(0°C × 9/5) + 32 = 32°F
(32°F − 32) × 5/9 = 0°C

Complete the exercise in the space below:
*/
const convertTemperature = (x,y) =>{
    if (y==="C") {
        return `${x*9/5 + 32} (Fahrenheit)`
    } else if (y==="F") {
        return `${(x-32)*9/5} (Celsius)`
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
const basicCalculator=(x,y,z) => {
    if (z==="add") {
        return x+y
    } else if (z==="subtract") {
        return x-y
    } else if (z==="multiply") {
        return x*y
    } else if (z==="divide") {
        return x/y
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));



// __________________________________________________________________________________________________
// !!!!! BELOW IS LEVEL UP CONTENT!!!!
/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/
const calculateGrade=(x) => {
    if (x>=90) {
        return "A"
    } else if (x>=80 && x<=89) {
        return "B"
    } else if (x>=70 && x<=79) {
        return "C"
    } else if (x>=60 && x<=69) {
        return "D"
    } else if (x<60) {
        return "F"
    }
}
console.log('Exercise 10 Result:', calculateGrade(85));

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre12'.

Complete the exercise in the space below:
*/
const createUsername = (x,y) => {
    let firstNameDic = x.split("")
    let lastNameDic = y.split("")
    let nameCount = firstNameDic.length + lastNameDic.length
    // return `${firstNameDic[0]}${firstNameDic[1]}${firstNameDic[2]}${lastNameDic[0]}${lastNameDic[1]}${lastNameDic[2]}${nameCount}`
    return `${firstNameDic.slice(0,3).join("")}${lastNameDic.slice(0,3).join("")}${nameCount}`
}
// any easy way to populat the 0-2 item??
// what if the names are less than 3 letters???? 
// A: need control flow  
// if (x.length<3) {
//         return x.slice(0,2).join("")
//     }
// .join return a string and "concatenating them"

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/
function numArgs() {
    // const args= Array.from(arguments)
    return arguments.length
}
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));



// __________________________________________________________________________________________________
// !!!!! BELOW IS CHALLENGE CONTENT FROM KYLE!!!!

/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

*/

function countSmileys(arr) {
    let counter=0
    for (i=0; i<arr.length; i++) {
        if (arr[i].length===2) {
            if ((arr[i].charAt(0)===":" || arr[i].charAt(0)===";") && (arr[i].charAt(1)===")"||arr[i].charAt(1)==="D")){
                counter+=1
            }
        } 
        if (arr[i].length===3) {
            if ((arr[i].charAt(0)===":" || arr[i].charAt(0)===";") &&(arr[i].charAt(1)==="-" || arr[i].charAt(1)==="~") &&(arr[i].charAt(2)===")"||arr[i].charAt(2)==="D")){
                counter+=1
            }
        }
        if (arr[i].length===0) counter+=0
    }
    return counter
}
console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;

// using regex to write the code

// function countSmileys (arr) {

//     // create a regex
//     // * (?:...) says to match everything enclosed
//     // * fist non-capture group (?::|;) we can match : | ;
//     // * second non-capture group (?:~|-) we can match ~ | -
//     // * last non-capture group (?:\)|D) we need to escape with the \ to get to the ) character as the first option | D

//     let regex = /((?::|;)(?:~|-)(?:\)|D))|((?::|;)(?:\)|D))/g
//     // create a variable for matching smileys
//     let count = arr.join("").match(regex)

//     console.log(count)
//     // ternary operator
//     return count ? count.length : 0 

// }

// console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
// console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;



/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/
function addBinary(a, b) {
    let binary = a + b
    return binary.toString(2)
}
console.log(addBinary(1,1))
console.log(addBinary(5,9))