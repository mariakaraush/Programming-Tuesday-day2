// let value = 0;
// do {
//     value = value + 1;
//     console.log("Doing something useful")
//     console.log(value)
// } while (value < 10);

// console.log("Just finished looping");

const readline = require('readline-sync');
let userValue = readline.question("Provide a value: ");

for ( let i = 1; i <= 12; i++) {
    console.log(`${i} x ${userValue} = ${i * userValue}`)
}