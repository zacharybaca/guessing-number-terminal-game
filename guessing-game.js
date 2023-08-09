const readLine = require('readline');
// Secret Number
let secretNumber;

// Number of Attempts Allowed to Guess Number
let numAttempts;

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function That Asks User How Many Guessing Attempts Should Be Allowed
function askLimit() {
    rl.question('Enter A Number For Attempts Allowed: ', (attempts) => {
        numAttempts = Number(attempts);
        askRange();
    })
}

// Function That Asks A User For A Minimum and Maximum Value For Guessing Number Range
function askRange() {
    rl.question('Enter A Minimum Number: ', (min) => {
        rl.question('Enter A Maximum Number: ', (max) => {
            min = Number(min);
            max = Number(max);
            secretNumber = randomInRange(min, max);
            askGuess();
        })
    })
}

// Function That Returns A Random Number Between The Provided Min and Max Values
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Function That Asks The User To Enter A Number That Will Serve As Their Guess
function askGuess() {
    rl.question('Enter A Guessing Number: ', (userGuess) => {
        userGuess = Number(userGuess);
        numAttempts--;
        if (checkGuess(userGuess)) {
            console.log("You Win!");
            rl.close();
        } else if (numAttempts === 0) {
            console.log("You Lose");
            rl.close();
        } else {
            askGuess();
        }
    })
}

//Function That Checks The User's Guess Against The Secret Number
function checkGuess(guess) {
    if (guess > secretNumber) {
        console.log('Too High');
        return false;
    } else if (guess < secretNumber) {
        console.log('Too Low');
        return false;
    } else {
        console.log('Correct!');
        return true;
    }
}

askLimit();
