// Make a program which prints into the console following multiplication table:
/** 
 1 2 3 4 5 6 7 8 9 10
 2 4 6 8 10 12 14 16 18 20
 3 6 9 12 15 18 21 24 27 30
 4 8 12 16 20 24 28 32 36 40
 5 10 15 20 25 30 35 40 45 50
 6 12 18 24 30 36 42 48 54 60
 7 14 21 28 35 42 49 56 63 70
 8 16 24 32 40 48 56 64 72 80
 9 18 27 36 45 54 63 72 81 90
 10 20 30 40 50 60 70 80 90 100
  */

// Solution by GitHub user karinjohanson

// Declaring for rows a new variable, which is an empty array
let ARRAYROW = [];
// Declaring a new variable for the first column of the multiplication table, which is an empty array 
let ARRAYCOL = [];
// Declaring a new variable for internal loop (multiplication )
let ROWNUM;
// Declaring a new variable for external loop
let COLNUM;

// Looping 10 times - one time per every row in the multiplication table
for(ROWNUM = 1; ROWNUM < 11; ROWNUM++) {
    // Declaring a new local variable for holding the multiplication values
    let multiplicationValues;
    // Looping 10 times - one time per every column in the multiplication table
    for(COLNUM = 1; COLNUM < 11; COLNUM++) {
        // Multiplying the numbers in first column and in row, results the value in the multiplication table
        multiplicationValues = ROWNUM * COLNUM;
        // Pushing all the multiplication results into the array 
        ARRAYCOL.push(multiplicationValues);
    }
    // Slicing the array of multiplicationvalues into chunks (rows)
    // Joining chunks with tabulator
    ARRAYROW[ROWNUM - 1] = (ARRAYCOL.slice(10 * (ROWNUM - 1), ROWNUM * 11).join('\t'));
}
// Logging the different array slices on different rows in the console
console.log(ARRAYROW.join('\n'));

