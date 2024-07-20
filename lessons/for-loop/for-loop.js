/**
 * for loop
 *
 * for loop is used to iterate over a block of code multiple times.
 *
 * for (initialization; condition; increment/decrement) {
 * // block of code to be executed
 * }
 */

// 1. assian a variable to an array of numbers and
// iterate over the array using a for loop and log each number
 const codeNameKidsNextDoor = [1,2,3,4,5]
 for(item in codeNameKidsNextDoor){
    console.log(item)
 }
// 2. assign a variable to an array of strings and
// iterate over the array using a for loop and log each string
const lifeSavers = ["Shay","Minnie","phil", "Ash"]
for (person in lifeSavers){
    console.log(lifeSavers[person])
}

//method 2
lifeSavers.forEach(person => {
    console.log("method 2 => ",person)
});
// 3. assign a variable to an array of numbers and add them all together
const kidMath = [69, 420, 99];
let result = 0;

kidMath.forEach(num => {
    result += num;
});

console.log(result);
