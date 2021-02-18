/* 
In Java, once an array is created, it has a fixed size.
To create mutable and dynamic lists, we can use ArrayLists.
*/
import java.util.ArrayList;
// Import Scanner class in order to enable user input
import java.util.Scanner;

// Class name describes the function of this program and matches file name
public class AppleSorter {
    /*
     * main() method lists the program tasks. It is the entry point for the
     * application. All other methods are invoked from the main() method. main()
     * method accepts a single argument: an array of elements of type String.
     */

    public static void main(String[] args) {
        // Scrap records are considered as anomalies and thereby they are not included
        // into sorted apples.
        ArrayList<Integer> scrap = new ArrayList<>();
        
        ArrayList<ArrayList<Integer>> sortedApples = new ArrayList<>();
        ArrayList<Integer> small = new ArrayList<>();
        ArrayList<Integer> medium = new ArrayList<>();
        ArrayList<Integer> big = new ArrayList<>();
        // Creating multidimentional ArrayList
        sortedApples.add(small);
        sortedApples.add(medium);
        sortedApples.add(big);

        int totalWeightSmall = 0;
        int totalWeightMedium = 0;
        int totalWeightBig = 0;
        int appleCount = 0;
        int totalWeight = 0;
        
        // Taking in user input
        // To test the code, you can use fallowing array as a testinput
        // 29,70,85,77,55,44,33,98,90,47,22,44,55,37,65
        System.out.println("Insert apple weights separated by comma and without spaces: ");
        Scanner userInput = new Scanner(System.in);
        String applesToSort = userInput.nextLine();
        userInput.close();

        // Converting string input into ArrayList
        String[] applesArray = applesToSort.split(",");
        int numOfInsertedApples = applesArray.length;
        ArrayList<Integer> apples = new ArrayList<>();
        for (int i = 0; i < numOfInsertedApples; i++) {
            apples.add(Integer.parseInt(applesArray[i]));
        } 

        // Sorting apples into categories
        for (int apple : apples) {
            if ((apple < 10) || (apple > 500)) {
                scrap.add(apple);
            } else if (apple <= 50) {
                // Calculating total weight was not required
                totalWeightSmall += apple;
                small.add(apple);
            } else if (apple <= 70) {
                totalWeightMedium += apple;
                medium.add(apple);
            } else {
                totalWeightBig += apple;
                big.add(apple);
            }
        }
        
        appleCount += small.size() + medium.size() + big.size();
        totalWeight = totalWeightSmall + totalWeightMedium + totalWeightBig;
        String stats = "Apples sorted: " + appleCount + " pc, " + totalWeight + " g";

        /*
         * System is a built-in Java class, out is short for output and println prints
         * required value and moves the cursor on the next line
         * In production code System.out.println should be avoided and replaced by a logger
         */

        System.out.println("Sorted apples: " + sortedApples);
        System.out.println("Small: " + small);
        System.out.println("Medium: " + medium);
        System.out.println("Big: " + big);
        System.out.println("Scrap: " + scrap);
        System.out.println("Stats:");
        System.out.println(stats);
        System.out.println("Small apples: " + totalWeightSmall + " g");
        System.out.println("Medium apples: " + totalWeightMedium + " g");
        System.out.println("Big apples: " + totalWeightBig + " g");
    }
}