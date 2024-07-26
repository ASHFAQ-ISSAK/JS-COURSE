/**
 * functions
 *
 * Functions are a way to group code together to perform a specific task.
 *
 * function functionName() {
 * // block of code to be executed
 * }
 */

// 1. create a function that logs "hello world" to the console

const printMsg = ()=>{
    let msg = "Hello world"
    console.log(msg)
}

printMsg()

// 2. create a function that logs "hello" and "world" to the console
const msglog = ()=>{
    let hel0 = "hello"
    let worl5 = "world"

    console.log(hel0 +" "+ worl5)
}

msglog()
// 3. create a function that takes in a name and logs "hello, name" to the console

const nameLogger = (Name) =>{
 console.log(`hello ${Name}`)
}

nameLogger("Crishten")
// 4. make a function that takes an array of numbers and logs each number to the console
const ages = [22,45,65,76,98,23]

const logNums = (arr)=>{
    arr.forEach(item => {
        console.log(item)
    });
}
logNums(ages)
