// Write a cycle which prints numbers into the console. 
// NB! You can use ONLY ONE cycle.
// The number of conditional statements (if, else if, else) or variables you can use is not limited.
// The result in the console should look like this:
/*
1
12
123
1234
12345
123456
1234567
12345678
123456789
12345678
1234567
123456
12345
1234
123
12
1
12
123
1234
12345
123456
1234567
12345678
123456789
12345678
1234567
123456
12345
1234
123
12
1
12
123
1234
12345
123456
1234567
12345678
123456789
12345678
1234567
123456
12345
1234
123
12
1
*/

// Solution by GitHub user karinjohanson

// Since the numbers repeat in the same order, I use an array with numbers from 1 to 9
let ARRAYOFNUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Declaring a variable, an empty array for holding the chunks from the array of numbers
let SLICEOFNUMBERS = [];
// Declaring a variable, an empty array, which will be the master array logged into the console
let ARRAYOFARRAYS = [];
// Declaring a variable which will hold the rep-amount of the loop
let REPETITIONS = 0;
// Defines how many peaks the zig-zag should have. Needed in order to simpify the reuse of the code
let PEAKS = 3;
// Defines the peak maximum. Needed in order to simpify the reuse of the code
let PEAKMAX = 9;
// Defines the peak minimum. Needed in order to simpify the reuse of the code
let PEAKMIN = 1;
// Declaring a helper variable which will help tracking the direction of chunking (bigger or smaller chunks)
let LASTSLICER;
// Declaring a variable which will hold the index to which the slicing of the array will be performed
let SLICER = PEAKMIN;
// Calculates the loop contriller. Needed in order to simpify the reuse of the code
let REPCONTROLLER = (2 * PEAKMAX - 2 * PEAKMIN) * PEAKS + 1;

while(REPETITIONS < REPCONTROLLER) {
    /** 
     In case the slicer index is other than the extremes, the process direction will be the condition for decision.
     In the extreme points (slicer 1 or 9 in this particular case) it will be be pointed out separately.
     */

    // If the slicer index equals to PEAKMIN (the minimum length of the slice, in this particular case 1)
    if(SLICER === PEAKMIN) {
        // The new slice of the numbers array
        SLICEOFNUMBERS = ARRAYOFNUMBERS.slice(0, SLICER);
        // Increases the index after the operation is executed
        SLICER++;
        // Remembers the direction of the process for the next time
        LASTSLICER = "increase";
        // If the slicer index equals to PEAKMAX (the maximum length of the slice, in this particular case 9)
    } else if(SLICER === PEAKMAX) {
        // The new slice of the numbers array
        SLICEOFNUMBERS = ARRAYOFNUMBERS.slice(0, SLICER);
        // Decreases the index after the operation is executed
        SLICER--;
        // Remembers the direction of the process for the next time
        LASTSLICER = "decrease";
        // If the slicer index is different from the extremes (in this particular case other than 1 or 9)
    } else {
        // Checks the process direction
        if(LASTSLICER == "increase") {
            // The new slice of the numbers array
            SLICEOFNUMBERS = ARRAYOFNUMBERS.slice(0, SLICER);
            // Increases the index after the operation is executed
            SLICER++;
            // Remembers the direction of the process for the next time
            LASTSLICER = "increase";
            // If process direction in not increasing, it is obviously decreasing
        } else {
            // The new slice of the numbers array
            SLICEOFNUMBERS = ARRAYOFNUMBERS.slice(0, SLICER);
            // Decreases the index after the operation is executed
            SLICER--;
            // Remembers the direction of the process for the next time
            LASTSLICER = "decrease";
        }
    }
    // Pushes the stringified numberslices (chunks) into the master array
    ARRAYOFARRAYS.push(SLICEOFNUMBERS.join(""));
    // Prepares the cycle for a new repetition or an ending (holds the number of repetitions executed)
    REPETITIONS++;
}
// Logs the master array into the console displayed as a string with the members on separate rows
console.log(ARRAYOFARRAYS.join('\n')); 