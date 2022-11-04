// Variables
var leftButton = document.querySelector("header section button:first-of-type");
var rightButton = document.querySelector("header section button:nth-of-type(2)");
var yearText = document.querySelector("header section h2");
var title = document.querySelector("h1");
var body = document.querySelector("body");
var root = document.querySelector(":root");

// Update year
var years = ["1990", "1992", "1995", "1996", "1996", "1998", "2002", "2003", "2015", "2019"]
var yearIndex = 0;
// var eggs = document.querySelectorAll("ol li");
// var eggsArray = Array.prototype.slice.call(eggs);

// Eieren 
var SMWbutton = document.querySelector("ol li:first-of-type button");
var SMWli = document.querySelector("ul li:first-of-type");
var SMWcross = document.querySelector("ul li:first-of-type article button")

var SMKbutton = document.querySelector("ol li:nth-of-type(2) button");
var SMW2button = document.querySelector("ol li:nth-of-type(3) button");
var SMRPGbutton = document.querySelector("ol li:nth-of-type(4) button");
var SM64button = document.querySelector("ol li:nth-of-type(5) button");
var YSbutton = document.querySelector("ol li:nth-of-type(6) button");
var SMSbutton = document.querySelector("ol li:nth-of-type(7) button");
var SM64DSbutton = document.querySelector("ol li:nth-of-type(8) button");
var YWWbutton = document.querySelector("ol li:nth-of-type(9) button");
var YCWbutton = document.querySelector("ol li:nth-of-type(10) button");

var position = 0;

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
    // Increment position before setting property, because value is otherwise updated aftwerwards
    position++
    root.style.setProperty('--position', position);
    
    previousYear()
}

function rotateRight() {
    position--
    root.style.setProperty('--position', position);
    // setCurrentYear();
    // console.log(position);

    nextYear()
}


// function setCurrentYear() {
//     if (position < 0) {
//         position = years.length - 1;
//     } 
//     if (position > years.length - 1) {
//         position = 0;
//     }
//     const year = years[years.length - 1 - position];
//     yearText.innerText = year;
// }

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



//  Open information
// Super Mario World
SMWbutton.addEventListener("click", displaySMW);
SMWcross.addEventListener("click", displaySMW);

function displaySMW() {
    SMWli.classList.toggle("visible");
    SMWbutton.classList.toggle("open");

    // Toggle Text if Card is folded out
    if (title.innerHTML === "Hatch a Yoshi!") {
        title.textContent = "Super Mario World";
    } else {
        title.innerHTML = "Hatch a Yoshi!";
    }
};

//  Open information
// Super Mario Kart


//  Open information
// Super Mario World 2: Yoshi's Island


//  Open information
// Super Mario RPG: Legend of the Seven stars


//  Open information
// Super Mario 64 Cameo


//  Open information
// Super Mario RPG: Legend of the Seven stars


//  Open information
// Yoshi's story


//  Open information
// Super Mario sunshine


//  Open information
// Super Mario 64 DS


//  Open information
// Yoshi's Woolly World


//  Open information
// Yoshi's Crafted World
