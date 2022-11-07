// Global variables
var leftButton = document.querySelector("header section button:first-of-type");
var rightButton = document.querySelector("header section button:nth-of-type(2)");
var yearText = document.querySelector("header section h2");
var title = document.querySelector("h1");
// var body = document.querySelector("body");
var root = document.querySelector(":root");

// Year & Game Title
var hatchText = "Hatch a Yoshi!";
var years = ["1990", "1992", "1995", "1996", "1996", "1998", "2002", "2004", "2015", "2019"]
var gameTitles = ["Super Mario World","Super Mario Kart", "Super Mario World 2: Yoshi's Island", "Super Mario RPG: Legend of the seven Stars", "Super Mario 64", "Yoshi's Story", "Super Mario Sunshine", "Super Mario 64 DS", "Yoshi's Woolly World", "Yoshi's Crafted World"]

var yearIndex = 0;
// Goes from -infinty to infinity. 0 is the center
var position = 0;
var lastShownEggIndex = 0;


// Eggs
var eggsParents = document.querySelectorAll("ol li");
var amountOfEggs = eggsParents.length;


// // Audio sound effects 
// // Audio from sources:
// // https://www.youtube.com/watch?v=5lJcMPyE3xw&ab_channel=Mario%27sCastle
// // https://www.youtube.com/watch?v=UaZWx10WkBg&ab_channel=NintendoTV64
// // https://themushroomkingdom.net/media
// // https://www.superluigibros.com/sound-and-music
// // https://www.sounds-resource.com/
var soundYoshiOriginal = new Audio("./audio/smOG-yoshi.wav");
var soundYoshiRPG = new Audio("./audio/smrpg-yoshi.wav");
var soundYoshiStory = new Audio("./audio/yoshi-story.mp3");
var soundYoshiSunshine = new Audio("./audio/sms-yoshi.wav");
var soundYoshi64DS = new Audio("./audio/64ds-yoshi.wav");
var soundYoshiWW = new Audio("./audio/ycw.wav");
var soundYoshiCW = new Audio("./audio/yww.wav");
// // Create array with audio variables
var sounds = [soundYoshiOriginal, soundYoshiOriginal, soundYoshiOriginal, soundYoshiRPG, soundYoshiOriginal, soundYoshiStory, soundYoshiSunshine, soundYoshi64DS, soundYoshiWW, soundYoshiCW];



// Get the egg button from the egg index of all egg list items
// Use eggIndex as general index name
function getEggButton(eggIndex) {
    return eggsParents[eggIndex].querySelector("button");
}


// For each with index of eggparents
for (let eggIndex = 0; eggIndex < amountOfEggs; eggIndex++) {

    // Get the egg button from the egg index
    const eggButton = getEggButton(eggIndex);

    // Add event listener to each egg
    eggButton.addEventListener("click", function() {

        // Close all the other info cards
        hideEggInformation(lastShownEggIndex);
        // Set lastShownEgg to eggIndex so it can be removed on the next function call
        lastShownEggIndex = eggIndex;

        let currentEggPosition = calculateCurrentEggIndex();
        rotateToOtherEgg(currentEggPosition, eggIndex);

        showEggInformation(eggIndex);
    });

    // Get the info element close button from the eggindex
    const close = document.querySelectorAll("main > ul > li article button")[eggIndex];

    // Add event listener to each close button
    close.addEventListener("click", function() {
        hideEggInformation(eggIndex);
    });
}

// Got help from my boyfriend with this function, I can explain it, ask me!
function rotateToOtherEgg(currentEggPosition, targetEggPosition) {
    // The difference between the target egg and the current egg
    // These positions are always positive and from 0 to amountOfEggs - 1
    var difference =  targetEggPosition - currentEggPosition;

    // We do not need to rotate if we are the same egg
    if (difference == 0) {
        return;
    }

    // Calculate the amount of turns to the right.
    var amountOfTurnsRight;
    if (difference > 0) {
        // If difference is positive we can just turn right that many times
        amountOfTurnsRight = difference;
    } else {
         // If difference is negative we need to turn right the amount of eggs - the difference
         // Since the difference is already a negative value, I add it to the amount of eggs
         amountOfTurnsRight = amountOfEggs + difference;
    }

    // Calculate how many times we need to turn left
    var amountOfTurnsLeft;
    if (difference < 0) {
        // If difference is negative, turn left that many times
        // Multiply by -1 to make the negative value a positive number
        amountOfTurnsLeft = -1 * difference;
    } else {
        // If difference is positive we need to turn left the amount of eggs - the difference
        amountOfTurnsLeft = amountOfEggs - difference;
    }

    // Turn the egg the shortest way
    if (amountOfTurnsRight < amountOfTurnsLeft) {
        // Turn to the right
        position = position - amountOfTurnsRight;
    } else {
        // Turn to the left
        position = position + amountOfTurnsLeft;
    }

    // Update the egg position.
    updateEggPosition();
}



// Calculate the current egg index based on the position variable
// Position is a number from -infinity to infinity, 0 is the center
// Egg index is a number from 0 to amountOfEggs - 1. 0 for the first egg
function calculateCurrentEggIndex(){
    // If position is 0, then the first egg is selected
    // If position is -1, then the second egg is selected
    
    // Use modulus to get the remainder of the division
    // If position is 25 or -25 for example, the movesWithoutCircles will be 5
    // This is used to remove the amount of times we have made full circles from the index
    // Use math.abs to make the value positive
    var movesWithoutCircles = Math.abs(position % amountOfEggs);

    // If we did not move at all, then the we must be on the first egg
    if (movesWithoutCircles == 0) {
        return 0;
    }

    // Determine the directions of the moves.
    if (position < 0) {
        // If the position is negative our moves have been to the right.
        return movesWithoutCircles;
    } else if (position > 0) {
        // If the position is positive we have been turning left
        // We start at the last egg and subtract the amount of moves we have made to the left
        return amountOfEggs - movesWithoutCircles;
    }
}



function showEggInformation(eggIndex) {
    // Get the egg button and info element from the egg index.
    var eggButton = getEggButton(eggIndex);
    var infoElement = document.querySelectorAll("main > ul > li")[eggIndex];

    // Add the class "visible" on the infoElement
    infoElement.classList.add("visible");

    // Add the class "open" on the egg
    eggButton.classList.add("open");

    // Set the correct year and year text.
    title.textContent = gameTitles[eggIndex];
    yearText.innerText = years[eggIndex];
    sounds[eggIndex].play();

    yearIndex = eggIndex;
}

function hideEggInformation(eggIndex) {
    // Get the egg button and info element from the egg index.
    var eggButton = getEggButton(eggIndex);
    var infoElement = document.querySelectorAll("main > ul > li")[eggIndex];

    // Remove the class "visible" on the infoElement
    infoElement.classList.remove("visible");

    // Remove the class "open" on the egg
    eggButton.classList.remove("open");

    // Set the title to the hatch text.
    title.textContent = hatchText;
}



// Rotate carousel
leftButton.addEventListener("click", rotateLeft);
rightButton.addEventListener("click", rotateRight);

// Listen to arrow keys as events
// Code inspired from https://www.tutorialspoint.com/detecting-arrow-key-presses-in-javascript
document.onkeydown = function (event) {
    switch (event.key) {
        case 'ArrowLeft':
            rotateLeft()
            break;
        case 'ArrowRight':
            rotateRight()
            break;
    }
 };

function rotateLeft() {
    // Add a position to the right with increment
    // Increment position before setting property, because value is otherwise updated aftwerwards
    position++
    updateEggPosition();
    // Close open Yoshi Info when rotating with controls
    hideEggInformation(lastShownEggIndex);

    previousYear()   
}

function rotateRight() {
    // Add a position to the right with decrement
    position--
    updateEggPosition();
    // Close open Yoshi Info when rotating with controls
    hideEggInformation(lastShownEggIndex);

    nextYear()
}

function updateEggPosition(){
    // Set the position of the egg to the current egg index
    root.style.setProperty('--position', position);
}



// Update year
function previousYear(){
    yearIndex--;
    // Wrap the position to the end if it goes out of bounds
    if (yearIndex < 0) {
        yearIndex = years.length - 1;
    }
    updateYear();
    
}

function nextYear(){
    yearIndex++;
    // Wrap the position to the beginning if it goes out of bounds
    if (yearIndex > years.length - 1) {
        yearIndex = 0;
    }
    updateYear();
}

function updateYear(){
    // Update the year to the correct year according to the yearindex
    yearText.innerText = years[yearIndex];
}