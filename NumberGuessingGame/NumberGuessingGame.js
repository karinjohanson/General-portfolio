/* 
The game "Guess the number", allows the user guess the numbers.
    On the first level the numbers are between 1 and 10.
    If the user guesses the number correctly, he gets one point and moves to the second level.
    Next, the game lets the user guess numbers between 1 and 20.
    If the user guesses the number correctly, he gets one more point and moves to the third level.
    Next, the game lets the user guess numbers between 1 and 30 and followed by the same logic, 1-40, 1-50, 1-60 etc.
    Additional requirements for the program:
    On the same level user gets to guess not more than three times. 
    If the user fails to guess three times in row at the same level, the game is over.
    User must see the numbers he already guessed at the same level.
    User must see the score.
    User must see what level is he on.
    When user guessed incorrectly, the program must give the user a hint 
    - is the number greater or smaller than he guessed.
    When the game is over, the user must see, what was the number.
    User must have the chance to start the game over (- a button "Start over" or similar solution).
    All the interaction must take place on the HTML-side. 
    Using JavaScript functions like "alert", "prompt" or "confirm" is not allowed. 
*/

// Related files: NumberGuessingGame.html, NumberGuessingGame.css

// Solution by GitHub user karinjohanson

// The function is triggered by clicking the button or hitting the "Enter" key on the HTML side

// Initial score
let currentScore = 0;
// Initial level
let currentLevel = 1;
// The max number included into random selection on this level
let upperLimit = currentLevel * 10;
// Randomly generated number
let theNumberIamThinkingOf;
// Declaring an empty array for wrongly guessed numbers
let guessedWrongly = [];
// Declaring variables for DOM manipulation
let instructiveMessage = document.getElementById("instructiveMessage");
let successMessage = document.getElementById("successMessage");
let instructions = document.getElementById("instructions");
let informativeMessage = document.getElementById("informativeMessage");
let finalResultMessage = document.getElementById("finalResult");
let enterButton = document.getElementById("enter");

// Adding "Enter" key trigger: the user can trigger the function hitting "Enter" 
let input = document.getElementById("checkThenumber");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        enterButton.click();
    }
});

function checkTheuserInput() {
    // Declaring a variable for user input
    let rawInput = input.value;
    // Clearing the messages from the last function run
    clearMessages();
    // Re-adding the instructions
    instructions.textContent = `Enter the number between 1 and ${upperLimit} (inclusively) here:`

    if (!theNumberIamThinkingOf) {
        // Creating pseudorandom number between 1 and 10 (included)
        theNumberIamThinkingOf = Math.floor(Math.random() * upperLimit) + 1;
    }

    // Validating user input
    if ((rawInput === "") || (rawInput < 1) || (rawInput > upperLimit)) {
        instructiveMessage.textContent = `You must enter a number between 1 and ${upperLimit} to play the game!`;
        setFocus();
        return;
    }

    // When the number is aready used, it does not count
    if (guessedWrongly.includes(rawInput)) {
        informativeMessage.textContent = `You have already used the number ${rawInput} on this level.`
        // Clearing the input field
        setFocus();
        return;
    }

    if (rawInput == theNumberIamThinkingOf) {
        // Displaying the success message
        successMessage.textContent = `Nice work! The number I was thinking of was indeed ${theNumberIamThinkingOf}!`;
        // Increasing the score by 1 point
        currentScore++;
        // Increasing the level by 1 level
        currentLevel++;
        // Emptying the wrongly guessed numbers array
        guessedWrongly = [];
        // Generating new random number
        theNumberIamThinkingOf = Math.floor(Math.random() * upperLimit) + 1;
        // If the user guessed wrongly, push the guessed number into the array of wrongly guessed numbers
    } else if (rawInput != theNumberIamThinkingOf) {
        guessedWrongly.push(rawInput);
        // If the user guessed 3 times in the row wrongly, the game is over
        if (guessedWrongly.length >= 3) {
            successMessage.textContent = `GAME OVER!`
            // The user can start the game over by resetting it
            instructiveMessage.textContent = `Do you wish to play again? Click the "Reset" button!`
            // The correct number is outputted to the user
            informativeMessage.textContent = `The number I was thinking of was ${theNumberIamThinkingOf}.`
            finalResultMessage.textContent = `Your final score is ${currentScore}.
                The highest level you reached was ${currentLevel}.`;
            // The trigger button will be disabled after the correct number is outputted so the user can not cheat and to continue, he must reset the game
            enterButton.setAttribute("disabled", "true");
            // If the user guessed wrongly less than 3 times in a row, he gets notified and a hint
        } else if (guessedWrongly.length < 3) {
            let hint = (rawInput < theNumberIamThinkingOf) ? "greather than" : "smaller than";
            successMessage.textContent = `Unfortunately your guess was incorrect.`
            instructiveMessage.textContent =
                `I\'ll give you a HINT: 
                The number I\'m thinking of is ${hint} ${rawInput}!`;
        }
    }
    // Writing the wrongly guessed numbers into the tables cells according to their index
    // If there is no number with the particular index, fill the cell with x
    document.getElementById("0").textContent = guessedWrongly[0] ? `${guessedWrongly[0]}` : `X`;
    document.getElementById("1").textContent = guessedWrongly[1] ? `${guessedWrongly[1]}` : `X`;
    document.getElementById("2").textContent = guessedWrongly[2] ? `${guessedWrongly[2]}` : `X`;
    setFocus();
    // Displaying the current level in the HTML
    document.getElementById("level").textContent = currentLevel;
    // Displaying the current score in the HTML
    document.getElementById("score").textContent = currentScore;
    // Updating the upper limit
    upperLimit = currentLevel * 10;
    // Adding the instructions right after the score may have been changed so that the user could see it BEFORE he enters a new number
    instructions.textContent = `Enter the number between 1 and ${upperLimit} (inclusively) here:`
}

// Resetting the game by reloading the page
function resetGame() {
    location.reload();
}

function setFocus() {
    // Clearing the input field
    document.getElementById("checkThenumber").value = "";
    // Setting cursor into the input field
    document.getElementById("checkThenumber").focus();
}

// Clearing the messages from last steps
function clearMessages() {
    successMessage.textContent = "";
    instructiveMessage.textContent = "";
    informativeMessage.textContent = "";
    instructions.textContent = "";
}
