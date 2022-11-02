// Variables
var leftButton = document.querySelector("header section button:first-of-type");
var rightButton = document.querySelector("header section button:nth-of-type(2)");
var yearText = document.querySelector("header section h2");
var body = document.querySelector("body");
var root = document.querySelector(":root");

// Update year
var years = ["1990", "1992", "1995", "1996", "1996", "1998", "2002", "2003", "2015", "2019"]
var yearIndex = 0;

// Buttons (eieren)
var SMWbutton = document.querySelector("ol li:first-of-type button");
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
    console.log(position);

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

// Code inspired from https://www.tutorialspoint.com/detecting-arrow-key-presses-in-javascript
document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            console.log("Left key is pressed.");
            rotateLeft()
            break;
        case 39:
            console.log("Right key is pressed.");
            rotateRight()
            break;
    }
 };