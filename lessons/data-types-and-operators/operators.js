/**
 * operators in javascript help us work with data
 * they will be used in many ways
 *
 * adding numbers
 * concatenating strings
 * comparing values
 * are just a few
 *
 */

// 1. make variable and increment
let age = 1 
age+=1
console.log (age)

// 2. make 2 variables that are numbers and add them together
let s = 6
let n = 9

const result = s+n
console.log(result)
// 3. make 3 variables that are numbers and multiply them together
const multipliedNums =s * n * age
console.log(multipliedNums)
// 4. make 2 variables that are strings and concatenate them
let shayIsHere = "Shay i see you "
let satisfiedNow = "and I just broke the 4th wall"

const msg = shayIsHere + satisfiedNow

console.log(msg)
// 5. make 2 variables that are numbers and compare them
let ageOfAsh = 27;
let ageOfMinnie = 40;

// Compare the variables
if (ageOfAsh > ageOfMinnie) {
    console.log("Ash is older than Minnie.");
} else if (ageOfAsh < ageOfMinnie) {
    console.log("Ash is younger than Minnie.");
} else {
    console.log("Ash and Minnie are of the same age.");
}


