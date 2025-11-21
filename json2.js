/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector('header');
const section = document.querySelector('section');

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4: Store the URL of a JSON file in a variable */
    const requestURL = 'https://patrickagu.github.io/LESSON-10/js/i-scream.json';   
    // use this URL for local testing: './js/i-scream.json'
    
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(requestURL);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request);
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    const iScream = await response.json();
    // STEP 8: Output the iScream JSON object to the console 
    console.log(iScream);
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(iScream);
    showTopFlavors(iScream);
}

populate();

// step9b- build out the populateHeader() function
function populateHeader(jsonObj) {
    // Create the H1 element 
    const headerH1 = document.createElement('h1');
    
    // Grab the company name from the JSON object and use it for the text node
    headerH1.textContent = jsonObj.companyName;
    
    // FIX: Append the H1 to the header
    header.appendChild(headerH1);
}

// STEP 10a: Invoke the showTopFlavors function here, then build it below
function showTopFlavors(jsonObj) {
    // STEP 10c: Attache the JSON topFlavors object to a variable
    let topFlavors = jsonObj.topFlavors;
    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i++) {
        // STEP 10e: build HTML elements for the content
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let ul = document.createElement('ul');

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = topFlavors[i].name;        
        img.setAttribute('src', 'https://patrickagu.github.io/LESSON-10/images/' + topFlavors[i].image);
        img.setAttribute('alt', topFlavors[i].name);
        // to use local folder, use ./images/ instead of the full URL above

        // STEP 10g: Build a loop for the ingredients array in the JSON
        let ingredients = topFlavors[i].ingredients;
        // FIX: Changed j++ instead of ingredients++
        for(let j = 0; j < ingredients.length; j++) {
            // add the ingredient to the UL
            let listItem = document.createElement('li');
            listItem.textContent = ingredients[j];
            ul.appendChild(listItem);
        }
        
        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(ul);
        
        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        // FIX: Added the missing appendChild
        section.appendChild(article);
    }
}