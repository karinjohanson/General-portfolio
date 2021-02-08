/*
    Checks whether the inserted word or phrase is a palindrome. 
    Displays the result to the user - is it a palindrome or not.
    The code is case insensitive.
    The code removes spaces from the input.
    Related files: Palindrome.html, Palindrome.css
*/

// Solution by GitHub user karinjohanson

// Converting HTML Collection into an array so that array methods can be used.
const OUTPUT_MESSAGE_CLASS = Array.from(document.getElementsByClassName("outputMessage"));
const TEST_INPUT = document.getElementById("testInput");
const REFLECTED_OUTPUT = document.getElementById("reflectedOutput");
const RESULT_OUTPUT = document.getElementById("resultOutput");
const RESULT_PICTURE = document.getElementById("resultPicture");
const REFERENCE = document.getElementById("reference");

// A function which checks whether the user input is a palindrome.
function checkThepalindromeTwo() {
    const rawInput = TEST_INPUT.value;
    /*
     Local variable for holding the user input is converted to upper case and without spaces.
     Spaces are searched using JavaScript Regular Expression global search /g for whitespace \s and then they are
     replaced with "" - nospace.
     */
    const upperCaseinput = rawInput.toUpperCase().replace(/\s/g, "");
    // Checks whether the user inserted other characters than letters.
    let containsCharsNotAllowed = (/[^A-ZÕÄÖÜ]/gi).test(upperCaseinput);
    let reversedInput;

    // Informs user about the expected input rules if the input does not validate.
    if ((containsCharsNotAllowed === true) || (upperCaseinput === "")) {
        RESULT_OUTPUT.textContent = "Sorry, your sentence must not contain numbers or non-letter characters or be empty!";
    } else {
        // Splits the string into individual characters which form an array. 
        reversedInput = upperCaseinput.split("");
        // Reverses the array, joins the elements without separator.
        reversedInput = reversedInput.reverse().join("");
        // Informs the user what sequence (input without spaces) will be checked.
        REFLECTED_OUTPUT.textContent = upperCaseinput;
        // If the initial sequence matches the reversed sequence, it is a palindrome.
        if (upperCaseinput === reversedInput) {
            // Lets the user know the result
            RESULT_OUTPUT.textContent = `Yes, ${upperCaseinput} is reversed ${reversedInput} - it is a palindrome!`;
            // Adds a descriptive picture to the result
            RESULT_PICTURE.style.backgroundImage = "url('https://i.pinimg.com/474x/07/99/83/079983bc67f9276469264eca2fdc9a09.jpg')";
            REFERENCE.textContent = `Source of the picture: https://i.pinimg.com/474x/07/99/83/079983bc67f9276469264eca2fdc9a09.jpg`
        } else {
            RESULT_OUTPUT.textContent = `${upperCaseinput} is reversed ${reversedInput} - it is not a palindrome.`;
            RESULT_PICTURE.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/thumb/6/64/CatDog.jpeg/250px-CatDog.jpeg')";
            REFERENCE.textContent = `Source of the picture: https://upload.wikimedia.org/wikipedia/en/thumb/6/64/CatDog.jpeg/250px-CatDog.jpeg`
        }
        // Loops through the output message class members. 
        // Turns the paragraphs containing additional text for the answer visible. 
        OUTPUT_MESSAGE_CLASS.forEach(element => element.style.visibility = "visible");
        // Clears the input field   
        TEST_INPUT.value = "";
    }
}

/* 
Clicking the reset button triggers the resetfunction which resets the input-output by just writing it over 
with no value or changing the style of the element
 */
function resetTheinputAndoutput() {
    // Clears the input field (if it is not cleared already)
    TEST_INPUT.value = "";
    // Sets the focus into the input field
    TEST_INPUT.focus();
    // Clears the paragraph containing the checked sequence
    REFLECTED_OUTPUT.textContent = "";
    // Clears the paragraph containing the result
    RESULT_OUTPUT.textContent = "";
    // Hides the additional text which comes with answers
    OUTPUT_MESSAGE_CLASS.forEach(element => element.style.visibility = "hidden");
    // Removes the background-picture
    RESULT_PICTURE.style.backgroundImage = "none";
    // Removes reference text
    REFERENCE.textContent = "";
}
