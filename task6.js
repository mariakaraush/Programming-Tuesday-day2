const readline = require("readline-sync")

let guess = "";
let randomNum = Math.floor(Math.random() * 100 + 1);
count = 0;

do {
    guess = readline.question("Please guess a number between 1 and 100: ");
    count ++
        
        if (guess > randomNum) {
            console.log(randomNum + " the number was. You missed, the number is to high! Try again!");
            
        } else {
            console.log(randomNum + " the number was. The number is to low, try again!");
        }
 
    } while (randomNum != guess)

    console.log(randomNum + " the number was. Contratulations!! The number is correct.");
    console.log(`You have guessed the number ${count} times.`);
