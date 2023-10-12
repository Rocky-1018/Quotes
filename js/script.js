/******************************************
Prashanth 300364316

*****************************************/

/*** 
 * `quotes` array 
***/
var quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        source: "Steve Jobs"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        source: "Martin Luther King Jr.",
        citation: "Strength to Love",
        year: 1963
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        source: "Winston Churchill",
        year: 1921
    },
    {
        quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
        source: "Edmund Burke",
        year: 1989
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        source: "Nelson Mandela"
    }
];


/***
 * `getRandomQuote` function
***/
var lastRandomIndex; // creating a variable which holds last random index 

function getRandomQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastRandomIndex); // comparing the random index with last random index if its true then regenerating until its different

    lastRandomIndex = randomIndex; // assigning the random index to last random index
    return quotes[randomIndex];
}


/***
 * `printQuote` function
***/
function printQuote() {
    var randomQuote = getRandomQuote();
    
    var html = '<p class="quote">' + randomQuote.quote + '</p>';
    html += '<p class="source">' + randomQuote.source;

    if (randomQuote.citation) {
        html += '<span class="citation">' + randomQuote.citation + '</span>';
    }

    if (randomQuote.year) {
        html += '<span class="year">' + randomQuote.year + '</span>';
    }

    html += '</p>';

    document.getElementById('quote-box').innerHTML =""; // Clearing the content of quotebox
    document.getElementById('quote-box').innerHTML =html; // appending the html elements to the quote box
    
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById('load-quote').addEventListener('click', printQuote);

printQuote(); // generating of random quote once page loads



