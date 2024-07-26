/**
 * else if statement is used to specify a new condition beneath the original if
 * and above the else statement. It is used when there are more than two conditions
 */

// 1. make 3 variables and compare them with an else if statement
// if(_____) {}
// else if(_____) {}
// else {}
let marksAnthony = ["Anthony", 54];
let marksMoris = ["Morris", 95];
let marksAsh = ["Ash", 34];

const getGrade = (student) => {
    if (student[1] >= 90) {
        console.log(`${student[0]} got an A`);
    } else if (student[1] >= 75) {
        console.log(`${student[0]} got a B`);
    } else if (student[1] >= 50) {
        console.log(`${student[0]} got a C`);
    } else if (student[1] >= 35) {
        console.log(`${student[0]} got a D`);
    } else {
        console.log(`${student[0]} got an E`);
    }
};

getGrade(marksAnthony);
getGrade(marksMoris);
getGrade(marksAsh);


