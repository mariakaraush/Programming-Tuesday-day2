// let value = 0;
// do {
//     value = value + 1;
//     console.log("Doing something useful")
//     console.log(value)
// } while (value < 10);

// console.log("Just finished looping");

// const readline = require('readline-sync');
// let userValue = readline.question("Provide a value: ");

// for ( let i = 1; i <= 12; i++) {
//     console.log(`${i} x ${userValue} = ${i * userValue}`)
// }

// Task 2
console.log("Task 2")

for (let i = 1;  i <= 3; i++) {
    console.log(Math.pow(i, 2))
}


console.log("Task 3")

for (i = 10; i > 0; i--) {
    console.log(i)
}


// console.log("Task 4")

// for (let i = 1; i <= 1000; i++ ) {
//     let calc = i % 3;
//     if (calc == 0) {
//         console.log(`${i} % 3 = ${calc}`)
//     }
//     calc = i % 4;
//     if (calc == 0) {
//         console.log(`${i} % 4 = ${calc}`)
//     }
// }

console.log("Task 5")

let pop = 67765900;
let year = 0

do {
    let increase = pop * 0.3;
    pop = pop + increase
    year ++
} while (pop <= 100000000)

console.log(`The population reached 80000000 in ${year} years`)
