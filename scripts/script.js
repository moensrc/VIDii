// Variables
var leftButton = document.querySelector("header section button:first-of-type");
var rightButton = document.querySelector("header section button:nth-of-type(2)");
var yearText = document.querySelector("header section h2");
var title = document.querySelector("h1");
var body = document.querySelector("body");
var root = document.querySelector(":root");

// Update year
var years = ["1990", "1992", "1995", "1996", "1996", "1998", "2002", "2004", "2015", "2019"]
var yearIndex = 0;
// var eggs = document.querySelectorAll("ol li");
// var eggsArray = Array.prototype.slice.call(eggs);

// Eieren 
var SMWbutton = document.querySelector("ol li:first-of-type button");
var SMWli = document.querySelector("main > ul > li:first-of-type");
var SMWcross = document.querySelector("main > ul > li:first-of-type article button");

var SMKbutton = document.querySelector("ol li:nth-of-type(2) button");
var SMKli = document.querySelector("main > ul > li:nth-of-type(2)");
var SMKcross = document.querySelector("main > ul > li:nth-of-type(2) article button");

var SMW2button = document.querySelector("ol li:nth-of-type(3) button");
var SMW2li = document.querySelector("main > ul > li:nth-of-type(3)");
var SMW2cross = document.querySelector("main > ul > li:nth-of-type(3) article button");

var SMRPGbutton = document.querySelector("ol li:nth-of-type(4) button");
var SMRPGli = document.querySelector("main > ul > li:nth-of-type(4)");
var SMRPGcross = document.querySelector("ul li:nth-of-type(4) article button");

var SM64button = document.querySelector("ol li:nth-of-type(5) button");
var SM64li = document.querySelector("main > ul > li:nth-of-type(5)");
var SM64cross = document.querySelector("ul li:nth-of-type(5) article button");

var YSbutton = document.querySelector("ol li:nth-of-type(6) button");
var YSli = document.querySelector("main > ul > li:nth-of-type(6)");
var YScross = document.querySelector("ul li:nth-of-type(6) article button");

var SMSbutton = document.querySelector("ol li:nth-of-type(7) button");
var SMSli = document.querySelector("main > ul > li:nth-of-type(7)");
var SMScross = document.querySelector("ul li:nth-of-type(7) article button");

var SM64DSbutton = document.querySelector("ol li:nth-of-type(8) button");
var SM64DSli = document.querySelector("main > ul > li:nth-of-type(8)");
var SM64DScross = document.querySelector("ul li:nth-of-type(8) article button");

var YWWbutton = document.querySelector("ol li:nth-of-type(9) button");
var YWWli = document.querySelector("main > ul > li:nth-of-type(9)");
var YWWcross = document.querySelector("ul li:nth-of-type(9) article button");

var YCWbutton = document.querySelector("ol li:nth-of-type(10) button");
var YCWli = document.querySelector("main > ul > li:nth-of-type(10)");
var YCWcross = document.querySelector("ul li:nth-of-type(10) article button");

var position = 0;


// Audio sound effects 
// Audio from:
// https://www.youtube.com/watch?v=5lJcMPyE3xw&ab_channel=Mario%27sCastle
// https://www.youtube.com/watch?v=UaZWx10WkBg&ab_channel=NintendoTV64
// https://themushroomkingdom.net/media
// https://www.superluigibros.com/sound-and-music
// https://www.sounds-resource.com/
var soundYoshiOriginal = new Audio("./audio/smOG-yoshi.wav");
var soundYoshiRPG = new Audio("./audio/smrpg-yoshi.wav");
var soundYoshiStory = new Audio("./audio/yoshi-story.mp3");
var soundYoshiSunshine = new Audio("./audio/sms-yoshi.wav");
var soundYoshi64DS = new Audio("./audio/64ds-yoshi.wav");
var soundYoshiWW = new Audio("./audio/ycw.wav");
var soundYoshiCW = new Audio("./audio/yww.wav");


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
    // Increment position before setting property, because value is otherwise updated afterwards
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

function rotate() {
    root.style.setProperty('--position', position);
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

    // Play SMW Sound effect
    soundYoshiOriginal.play();

    position = 0;
    rotate();
};

//  Open information
// Super Mario Kart
SMKbutton.addEventListener("click", displaySMK);
SMKcross.addEventListener("click", displaySMK);

function displaySMK() {
    SMKli.classList.toggle("visible"); // Not adding this class???????
    SMKbutton.classList.toggle("open");

    // Toggle Text if Card is folded out
    if (title.innerHTML === "Hatch a Yoshi!") {
        title.textContent = "Super Mario Kart";
    } else {
        title.innerHTML = "Hatch a Yoshi!";
    }

    // Play SMW Sound effect
    soundYoshiOriginal.play();

    position = -1;
    rotate();
    // Now the year is'nt correct because it's not linked to the eggs
};

//  Open information
// Super Mario World 2: Yoshi's Island
SMW2button.addEventListener("click", displaySMW2);
SMW2cross.addEventListener("click", displaySMW2);

function displaySMW2() {
    SMW2li.classList.toggle("visible");
    SMW2button.classList.toggle("open");

    // Toggle Text if Card is folded out
    if (title.innerHTML === "Hatch a Yoshi!") {
        title.textContent = "Super Mario World 2: Yoshi's Island";
    } else {
        title.innerHTML = "Hatch a Yoshi!";
    }

    // Play SMW Sound effect
    soundYoshiOriginal.play();
};

//  Open information
// Super Mario RPG: Legend of the Seven stars
SMRPGbutton.addEventListener("click", displaySMRPG);
SMRPGcross.addEventListener("click", displaySMRPG);

function displaySMRPG() {
    SMRPGli.classList.toggle("visible");
    SMRPGbutton.classList.toggle("open");

    // Toggle Text if Card is folded out
    if (title.innerHTML === "Hatch a Yoshi!") {
        title.textContent = "Super Mario RPG: Legend of the seven Stars";
    } else {
        title.innerHTML = "Hatch a Yoshi!";
    }

    // Play SMRPG Sound effect
    soundYoshiRPG.play();
};

//  Open information
// Super Mario 64 Cameo
SM64button.addEventListener("click", displaySM64);
SM64cross.addEventListener("click", displaySM64);

function displaySM64() {
    SM64li.classList.toggle("visible");
    SM64button.classList.toggle("open");

    // Toggle Text if Card is folded out
    if (title.innerHTML === "Hatch a Yoshi!") {
        title.textContent = "Super Mario 64";
    } else {
        title.innerHTML = "Hatch a Yoshi!";
    }

    // Play SMW Sound effect 
    soundYoshiOriginal.play();
};

//  Open information
// Yoshi's Story
YSbutton.addEventListener("click", displayYS);
YScross.addEventListener("click", displayYS);

function displayYS() {
    YSli.classList.toggle("visible");
    YSbutton.classList.toggle("open");

    // Toggle Text if Card is folded out
    if (title.innerHTML === "Hatch a Yoshi!") {
        title.textContent = "Yoshi's Story";
    } else {
        title.innerHTML = "Hatch a Yoshi!";
    }

    // Play YS Sound effect
    soundYoshiStory.play();
};

//  Open information
// Super Mario sunshine
SMSbutton.addEventListener("click", displaySMS);
SMScross.addEventListener("click", displaySMS);

function displaySMS() {
    SMSli.classList.toggle("visible");
    SMSbutton.classList.toggle("open");

    // Toggle Text if Card is folded out
    if (title.innerHTML === "Hatch a Yoshi!") {
        title.textContent = "Super Mario Sunshine";
    } else {
        title.innerHTML = "Hatch a Yoshi!";
    }

    // Play SMS Sound effect 
    soundYoshiSunshine.play();
};

//  Open information
// Super Mario 64 DS
SM64DSbutton.addEventListener("click", displaySM64DS);
SM64DScross.addEventListener("click", displaySM64DS);

function displaySM64DS() {
    SM64DSli.classList.toggle("visible");
    SM64DSbutton.classList.toggle("open");

    // Toggle Text if Card is folded out
    if (title.innerHTML === "Hatch a Yoshi!") {
        title.textContent = "Super Mario 64 DS";
    } else {
        title.innerHTML = "Hatch a Yoshi!";
    }

    // Play 64DS Sound effect
    soundYoshi64DS.play();
};

// Open information
// Yoshi's Woolly World
YWWbutton.addEventListener("click", displayYWW);
YWWcross.addEventListener("click", displayYWW);

function displayYWW() {
    YWWli.classList.toggle("visible");
    YWWbutton.classList.toggle("open");

    // Toggle Text if Card is folded out
    if (title.innerHTML === "Hatch a Yoshi!") {
        title.textContent = "Yoshi's Woolly World";
    } else {
        title.innerHTML = "Hatch a Yoshi!";
    }

    // Play WW Sound effect
    soundYoshiWW.play();
};

// Open information
// Yoshi's Crafted World
YCWbutton.addEventListener("click", displayYCW);
YCWcross.addEventListener("click", displayYCW);

function displayYCW() {
    YCWli.classList.toggle("visible");
    YCWbutton.classList.toggle("open");

    // Toggle Text if Card is folded out
    if (title.innerHTML === "Hatch a Yoshi!") {
        title.textContent = "Yoshi's Crafted World";
    } else {
        title.innerHTML = "Hatch a Yoshi!";
    }

    // Play CW Sound effect
    soundYoshiCW.play();
};

