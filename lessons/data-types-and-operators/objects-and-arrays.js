/**
 * Objects and Arrays
 *
 * objects and arrays can hold all kinds of data-types
 *
 * objects are key value pairs
 * arrays are lists of data
 *
 * objects can even hold arrays or other objects
 * arrays can hold objects or other arrays
 */

// 1. make an object with 3 key value pairs
const anime ={
    title:"One piece",
    episodes: 1100,
    status:"ongoing"
}
// 2. make an array with 3 items
const drinks = ["pepsi","coke","brake fluid"]
// 3. make an object with an array as a value
const classroom = {
    students:["Minnie","phil","ash"]
}
// 4. make an array with objects
const familyMembers = [
    {
        role:"father",
        age:54
    },
    {
        role:"mother",
        age:41
    },
    {
        role:"child",
        age:15
    }
]
// 5. make an object with an array of objects as a value
const objectInception ={
    arrofobj : [classroom,familyMembers]
}

console.log(objectInception);