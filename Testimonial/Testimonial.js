/* 
    A program which takes the text (it is a testimonial (in Estonian) for developer named Stack (i.e. Pinu in Estonian)) from 
    prefilled HTML <textarea> element and on clicking a button, it dynamically creates a new <textarea> element
    and fills it with the content where only odd rows are present compared to the original text.
    Note that in the original <textarea> the rows and breaks must be exactly the same. 
    Here is the testimonial:

    Arendaja Pinu on töötaja, kelle leiate enamasti 
    uusi lahendusi loomas. Pinu töötab väga efektiivselt, ega käi 
    tööaega kolleegidega kohvitamise peale raiskamas. Reeglina on 
    ta lahkesti nõus kolleege juhendama, ning kunagi ei jää seetõttu 
    tal tööülesanded tähtajaks täitmata. Tihti peab aeganõudvaid lisa- 
    kohustusi ja oma oskuste täiendamist tähtsamaks kui kohvi- 
    pause. Teda iseloomustab tõsiasi, et tal pole vähimalgi määral 
    edevust, olgugi et ta on demonstreerinud äärmiselt põhjalikke 
    erialaseid teadmisi. Olen kindlalt veendunud, et Pinu ei ole 
    osakonnas mitte ainult vajalik, vaid noorusele vaatamata lausa 
    asendamatu töötaja. Soovitan juhatusel Pinu tingimata 
    edutada, mis võib omakorda ka teistes töötajates motivatsioonipuhangu
    vallandada.
*/

// Related files: Testimonial.html, Testimonial.css
// Solution by GitHub user karinjohanson

function decipher() {
    // Fetching the first body tag (getElementsByTagName returns an array even if it only contains one item)
    const BODY = document.getElementsByTagName("body")[0];
    // The testimonial will be deciphered only if it has not been deciphered already
    if (!document.getElementById("decipheredTestim")) {
        // Creating additional container divs for the new testimonial
        const FLEXCONTDIVROW = document.createElement("DIV");
        const FLEXCONTDIV = document.createElement("DIV");
        // Creating the new textarea for the deciphered testimonial
        const THETRUTHAREA = document.createElement("TEXTAREA");
        // Creating a new container for the remove button
        const BUTTONCONT = document.createElement("DIV");
        // Creating a new div for the remove button
        const BUTTONDIV = document.createElement("DIV");
        // Creating the removeButton
        const REMOVETRUTHBUTTON = document.createElement("BUTTON");

        // First the original testimonial is fetched and converted into an array
        let testimonialArray = document.getElementById("originalTestim").innerHTML.split("\n");
        // For the new testimonial a local variable is declared, which is an empty array
        let theTruth = [];

        // Setting the attributes for the newly created container
        FLEXCONTDIVROW.setAttribute("class", "row, flex-container");
        FLEXCONTDIVROW.setAttribute("id", "truthContainer");
        FLEXCONTDIV.setAttribute("class", "col-6, flex-container");

        // Setting the attributes for the new textarea containing the testimonial
        THETRUTHAREA.setAttribute("rows", 7);
        THETRUTHAREA.setAttribute("cols", 90);
        THETRUTHAREA.setAttribute("id", "decipheredTestim");
        // Setting the attributes for the remove button container
        BUTTONCONT.setAttribute("class", "row, flex-container");
        BUTTONCONT.setAttribute("id", "removeButtonCont");
        // Setting attributes for the remove button div
        BUTTONDIV.setAttribute("class", "col-6, flex-container");
        // Setting the attributes for the remove button
        REMOVETRUTHBUTTON.setAttribute("id", "removeButton");
        REMOVETRUTHBUTTON.setAttribute("onclick", "remove()");
        // Adding the remove button text
        REMOVETRUTHBUTTON.textContent = "Eemalda Pinu dešifreeritud iseloomustus";

        // Appending the deciphered testimonial container to the body
        BODY.appendChild(FLEXCONTDIVROW);
        FLEXCONTDIVROW.appendChild(FLEXCONTDIV);
        // Appending the deciphered testimonial to the container
        FLEXCONTDIV.appendChild(THETRUTHAREA);
        // Appending the removebutton container to the body
        BODY.appendChild(BUTTONCONT);
        // Appending the removebutton div to the removebutton container
        BUTTONCONT.appendChild(BUTTONDIV);
        // Appending the remove button to the remove button div
        BUTTONDIV.appendChild(REMOVETRUTHBUTTON);

        // The original testimonial array is iterated 
        for (i = 0; i < testimonialArray.length; i += 2) {
            // Every second element is pushed into the new testimonial
            theTruth.push(testimonialArray[i]);
        }
        // The new testimonial, which is an array at the moment, is converted into a string
        // and the comma + 8-space sequence separators are replaced with the linebreaks
        THETRUTHAREA.innerHTML = theTruth.toString().replace(/,        /g, " \n");
    }
}
// Removing the deciphered testimonial
function remove() {
    const DECIPHEREDTESTIMONIAL = document.getElementById("truthContainer");
    const REMOVEBUTTONCONT = document.getElementById("removeButtonCont");
    const BODY = document.getElementsByTagName("body")[0];
    BODY.removeChild(DECIPHEREDTESTIMONIAL);
    BODY.removeChild(REMOVEBUTTONCONT);
}