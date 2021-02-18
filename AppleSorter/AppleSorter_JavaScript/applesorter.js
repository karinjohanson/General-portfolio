// Author of this code: GitHub user karinjohanson
const scrap = [];
// Scrap records are considered as anomalies and thereby they are not included into sorted apples.
const small = [];
const medium = [];
const big = [];
const sortedApples = [small, medium, big];
/* 
Default input values. In order to call appleSorter function with defInput,
the dots in front of "...apples" must be removed and for further function calls
input arguments must be wrapped into square brackets like this:
appleSorter([4, 49, 72, 500, 54]); 
*/
const defInput = [29, 70, 85, 77, 55, 44, 33, 98, 90, 47, 22, 44, 55, 37, 65];
let totalWeightSmall = 0;
let totalWeightMedium = 0;
let totalWeightBig = 0;
let appleCount = 0;
// The rest parameter syntax allows to represent an indefinite number of arguments as an array
function appleSorter(...apples) {
    let apple;
    for (apple of apples) {
        if ((apple < 10) || (apple > 500)) {
            scrap.push(apple);
        } else if (apple <= 50) {
            // Calculating total weight was not required
            totalWeightSmall += apple;
            small.push(apple);
        } else if (apple <= 70) {
            totalWeightMedium += apple;
            medium.push(apple);
        } else {
            totalWeightBig += apple;
            big.push(apple);
        }
    }
    appleCount = small.length + medium.length + big.length;

    /* 
    Calculating and outputting stats was not required, 
    but it is quite informative and outputting it would be obvious requirement in the real factory 
    */ 
   
    console.log(`
    Sorted apples: ${sortedApples};
    Small: ${small};
    Medium: ${medium};
    Big: ${big};
    Scrap: ${scrap};
    Stats:
    apples sorted: ${appleCount} pc, ${(totalWeightSmall + totalWeightMedium + totalWeightBig)} g;
    small apples: ${totalWeightSmall} g; 
    medium apples: ${totalWeightMedium} g;
    big apples: ${totalWeightBig} g`);
    // Returning the multidimensional array of sorted apples was required
    return sortedApples;
}
