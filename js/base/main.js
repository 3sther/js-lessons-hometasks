/* eslint-disable indent */
'use strict'; // Announce that we use ES6


// Conditions
const scorePoints = 90;

if (scorePoints < 50) {
    console.log('Верно');
} else if (scorePoints > 100) {
    console.log('Много!');
} else {
    console.log('Пойдет');
}


// Binare short-condition
(scorePoints == 58) ? console.log('Мало!'): console.log('Много!');


// Condition with concuntenation
let changeMeMore = 10;

console.log(changeMeMore++);
console.log(changeMeMore);

// Consitions with "switch". Note that it is not working with operators of comparing 
const myPoints = 70;

switch (myPoints) {
    case myPoints < 50:
        console.log('Мало');
        break;
    case myPoints > 100:
        console.log('Много');
        break;
    case 70:
        console.log('Верно');
        break;
    default:
        console.log('Что-то пошло не так');
        break;
}

//I will guess a number you have in mind. I failed to programm it at the start of my learning
// but it seems I gueesd how to fix my problem by using prompt as functions - NOPE
// one more thought - you should use prompt inside of function and assign those func to variables


// const agree = confirm ('Загадайте число в пределах от 1 до 10');

// const a = prompt ('Ваше число 5?', "Мало, много или верно?");
// if (a == 'верно') {
//     alert ("Угадал!");
// };

// const b = (a == "много") ? prompt ('Ваше число 2?', "Мало, много или верно?") : prompt ('Ваше число 8?', "Мало, много или верно?");
// if (b == 'верно') {
//     alert ("Угадал!");
// };

// function countC () {

//     function alertLess () {
//         console.log("object");
//     }
//     alertLess ();


// if (a == "много" && b == "много") {
//         alert ('Ваше число 1!');
//     } else if (a == "много" && b == "мало") {
//         prompt ('Ваше число 3?', "Мало, много или верно?");
//     } else if (a == "мало" && b == "много") {
//         prompt ('Ваше число 6?', "Мало, много или верно?");
//     } else if (a == "мало" && b == "мало") {
//         prompt ('Ваше число 9?', "Мало, много или верно?");
//     }

//     return b;

// }
// countC ();
// const c = b;
// console.log(c);

// if (c == "мало" || "много") {


//         if (b == "мало" && c == "мало") {
//             alert ('Ваше число 4!');
//         } else if (b == "много" && c == "мало") {
//             alert ('Ваше число 10!');
//         } else if (b == "мало" && c == "много") {
//             alert ('Ваше число 7!');

//     }
//     }



// To know the number of digits in string
let strLenght = 0;
const myName = 'Игорь';

strLenght = myName.length; //method x.lenght is return the number of digits if a string
console.log(strLenght);


// getting any digit of string through the 

const firstName = 'Igor';
const lastName = 'Zhigalkin';

let firstLetterOfFirstName = '';
let firstLetterOfLastName = '';
let lastLetterOfLastName = '';

firstLetterOfFirstName = firstName[0]; //the first character of the string
firstLetterOfLastName = lastName[4]; //the fifth character of the string
lastLetterOfLastName = lastName[lastName.length - 1]; //the last character of the string

console.log(firstLetterOfFirstName);
console.log(firstLetterOfLastName);
console.log(lastLetterOfLastName);


// get familiar with arrays

const myPersonalData = [
    25, 'Igor'
];

const showAnyData = [myPersonalData[0]];
console.log(showAnyData);

myPersonalData[0] = 28; //changing the data in array
console.log(myPersonalData[0]);



const multiArray = [
    [12, 'Mountain', true],
    ['Slowly', false] //there might be arrays within another array
];

const exampleOfArray = multiArray[multiArray.length - 1]; // reach out the last array
console.log(exampleOfArray);

const exampleOfArrayIndex = multiArray[0][1]; // reach out the second entru of the first array
console.log(exampleOfArrayIndex);



const threeLayerArray = [
    [56, 12, 20],
    ['My', 'Name'],
    [
        [29, 'Foxxy'],
        [28, 'Igor']
    ]
];

const reachTheRabbitHole = threeLayerArray[2][0][1]; // reach out three-layered entry of arrays
console.log(reachTheRabbitHole);


const myFirstArray = ['Game', 'of'];

myFirstArray.push(['Thrones']); // adding the entry to the end of the array 
console.log(myFirstArray);

myFirstArray.unshift('The last season of the'); // adding the entry to the start of the array 
console.log(myFirstArray);


myFirstArray.pop(); // removing the last entry of the array
console.log(myFirstArray);

const removeData = myFirstArray.shift(); // removing the first entry of the array
console.log(myFirstArray);


// Get familiar with functions

// Function that maths two numbers
function mathMe() {
    const a = 5 * 9;
    const b = 10 + (6 / 8);
    // console.log(a / b);
    return a / b;
}
mathMe();
console.log(mathMe());



// Function scope 

function scopeVisability() {
    const myConst = 52;
    console.log(myConst);
}

scopeVisability();

// console.log(myConst);                // not defined object stops the quokka


// Return in fucntion
function minusSeven(value) {
    return value - 7;
}

console.log(minusSeven(10));


//  array in line
function arrayInLine(arr, item) {

    arr.push(item);
    return arr.shift();
}

const testArray = [1, 2, 3, 4, 5];

console.log(`Before: ${JSON.stringify(testArray)}`);
console.log(arrayInLine(testArray, 6));
console.log(`After: ${JSON.stringify(testArray)}`);

// function of random number
const randomNumber = Math.floor((Math.random() * 4));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(randomNumber);

// function which assign random number to array's value
// this can be used to random screen the elems

function paperRockScissors() {
    const arrayWithLetters = ['Paper', 'Stone', 'Scissors', 'Cheat'];
    return arrayWithLetters[randomNumber];
}

console.log(paperRockScissors());

// next is an example of function whic do smth with delay

// document.getElementById('ANY').classList.add("CLASSNAME");
// setTimeout(function, 1000) - in 1000ms function will be executed


// objects

const myParameters = {
    name: 'Igor',
    age: 28,
    'main skills': ['polite', 'IT-konwledge']
}

console.log(`${myParameters.age} ${myParameters['main skills'][1]}`);
//take a note: no need of dot

myParameters.name = 'Igor Zhigalkin'; //changing the property
console.log(myParameters.name);

const ageOfMine = 29;
console.log(myParameters.ageOfMine); //well, it should have worked

console.log(myParameters);
myParameters.gender = 'male'; //adding new property
console.log(myParameters);
delete myParameters.gender; // deleting the property
console.log(myParameters);

function lookupForProperty(val) { // example of working of vacabulary; search - key:value
    let result = '';

    const lookup = {
        A: 'alfa',
        B: 'bravo',
        C: 'charlie',
        D: 'delta',
        E: 'eagle'
    };
    result = lookup[val];
    return result;
}

console.log(lookupForProperty('C'));

function checkPropertyExisting(propName) {
    if (myParameters.hasOwnProperty(propName)) {
        return myParameters[propName];
    } else {
        return 'Not found';
    }
}

console.log(checkPropertyExisting('name'));


const complexArray = { // access to the complex object
    car: 'none',
    'life style': {
        freedom: true,
        joy: {
            everyday: false,
            amount: 4
        }
    }
}
const showMeTruth = complexArray['life style'].joy.amount;
console.log(showMeTruth);

// Complex function to update the object data

const myMusicCollection = {
    1001: {
        artist: 'Muse',
        tracks: []
    },
    1002: {
        artist: 'Linkin Park',
        tracks: [
            'Meteora',
            'What I\'ve Done'
        ],
        gold: true
    }
};
const myMusicCollectionCopy = JSON.parse(JSON.stringify(myMusicCollection)); //this save the copy of object

function updateMyMusicCollection(id, prop, value) {
    if (value === '') {
        delete myMusicCollection[id][prop]; //delete the property with blank value
    } else if (prop === 'tracks') {
        myMusicCollection[id][prop] = myMusicCollection[id][prop] || []; // this either update value, either create blank array
        myMusicCollection[id][prop].push(value); //adds value to the array
    } else {
        myMusicCollection[id][prop] = value; //change the value of the property
    }
    return myMusicCollection;
}

updateMyMusicCollection(1002, 'gold', '');
updateMyMusicCollection(1002, 'artist', 'LP');
updateMyMusicCollection(1001, 'tracks', 'New Born');


console.log(myMusicCollection);


// loop: while and do...while

const myCounterToFive = [];

let i = 0;

while (i < 5) { // add numbers from 1 to 5 to array
    myCounterToFive.push(i + 1);
    i++;
}

console.log(myCounterToFive);

do {
    myCounterToFive.push(i + 1);
    i++;
} while (i < 5);

console.log(i, myCounterToFive); //loop will run at least once

//loop: for

const myCounterToTen = [];

for (let i = 0; i < 10; i++) {
    myCounterToTen.push(i + 1);
}

console.log(myCounterToTen);

const myCounterToZero = [];

for (let i = 10; i > 0; i -= 2) {
    myCounterToZero.push(i);
}

console.log(myCounterToZero);

// this will sum nums in array
let myTotal = 0;

for (let i = 0; i < myCounterToZero.length; i++) {
    myTotal += myCounterToZero[i];
}

console.log(myTotal);

// this is how to work w/ actions is modern JS. Add listener to the id and do whatever u want
// document.getElementById('clickMe').addEventListener("click", printMyText, false);
// const printText = document.getElementById('printedText');
// function printMyText () {
//     printText.classList.toggle ("warning");      //tpggle allows to change the value
// }


// next is how to multiply arrays
function arrayToMultiply(arr) {
    let value = 1; //the 1 is important as if it would be 2, the result will multiple by 2
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++)(
            value *= arr[i][j]
        )
    }
    return value;
}
const out = arrayToMultiply([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);
console.log(out);


//searching within the array

const listOfPupils = [{
        firstName: 'Igor',
        lastName: 'Zhogalkin',
        row: 1,
        deck: 1,
        isPresent: true,
        warnings: ['like to eat', 'trying to loose fat']
    },
    {
        firstName: 'Natalia',
        lastName: 'Zhigalkina',
        row: 1,
        deck: 2,
        isPresent: true,
        warnings: ['like sweets', 'like her tiger']
    },
    {
        firstName: 'Shanya',
        lastName: 'FatButt',
        row: 1,
        deck: 3,
        isPresent: true,
        warnings: ['like to play with mouse', 'like to bite']
    }
];

function lookUpArray(name, prop) {
    for (let i = 0; i < listOfPupils.length; i++) {
        if (listOfPupils[i].firstName === name) {
            return listOfPupils[i][prop] || 'No such entry in the list';
        }
    }
    return 'No such name in the list'
}

const outProp = lookUpArray('Natalia', 'warnings');

console.log(outProp);


// this code is changing the bar slide at random number and get it back in 0.3 s
// document.getElementById('barProgress').addEventListener("click", getBarBigger);
// const barFullness = document.getElementById("bar");
// function getBarBigger () {
//     let randomNumber = Math.floor((Math.random()*100));
//     barFullness.style.width = randomNumber + "%";
//     setTimeout(() => {barFullness.style.width = "100%"}, 300);
// }


console.log('😸'); //add the emodji on Cntr+i

// function to pick random numer between two numbers

function pickRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //+1 helps to reach max value, rid it if no need
};

const getRandomFromTwo = pickRandomNumber(5, 20);
console.log(getRandomFromTwo);

//convert to integer (round number) from string

function convertToInteger(val) {
    return parseInt(val);
}

console.log(convertToInteger('56'));
console.log(convertToInteger('name'));


//complex ternary operators

function isPositive(val) {
    return val > 0 ? 'Is positive' : val < 0 ? 'Is negative' : 'Zero';
}
console.log(isPositive(-9));

//turns the arguments into array

const SUM = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})(); //and I have no idea why these parenthences are here
console.log(SUM(1, 2, 3, 4));



//DOM Operations❤️

const PRINT = document.getElementById('print'); //getting the elemen with ID=print
const GREEN_BLUR = document.getElementsByClassName('green-blur'); //getting the elemen with class=green-blur
const PAD = document.querySelector('.pads', '#print'); //return the first element matches "pads" selector
const PADS = document.querySelectorAll('.pads', '#print'); //return the array of all elements match "pads" OR "print" selectors
const titleOfBody = '<h1>Riders on the storm</h1>'
const plaintext = 'Hello world';

PRINT.innerHTML = titleOfBody; //the value of DOM element with #print now is titleOfBody

for (let i = 0; i < PADS.length; ++i) { //to change the array we use loop
    PADS[i].textContent = plaintext; //to hogher srcurity we use .textContent method
}

PRINT.style.backgroundColor = 'red'; //use method style to apply new INLINE styles
PRINT.style.cssText = 'color: red; boreder: 1 px dotted blue'; //✔️  There are two ways to apply multiple styles. 1st seems better
PRINT.setAttribute('style', 'width: 100px; margin: 50px 10px'); //⚠️  Be careful as both are OVERWRITE INLINE STYLES

console.log(PRINT.style); //this will show all styles that applied to PRINT (only inline)
console.log(window.getComputedStyle(PRINT)); //this shows ALL styles applied to element PRINT


//Eventlisteners (https://www.youtube.com/redirect?v=F3odgpghXzY&redir_token=0Er4GviyxhSoknzmFdhPJaiY5fF8MTU1NzAzODY0MEAxNTU2OTUyMjQw&event=video_description&q=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FEvents)


//oniput
const INPUT = document.getElementById('input');
const H1 = document.querySelector('h1');
INPUT.addEventListener('oninput', removeLetter(H1)); //eventlisteners allow to apply multiple functions to the same event

function removeLetter(val) { //when input any char it rid off last letter of H!
    val.textContent = val.textContent.slice(0, -1);
}

INPUT.removeEventListener('oninput', removeLetter(H1)); //⚠️ removing is not working when listener's function is insede listener (=> function)

//creating DOM elemnets

const para = document.createElement('p'); //this creates paragraph
const paraText = document.createTextNode('Text in here'); //this put the text inside the created paragraph
para.appendChild(paraText); //this concatinate two elements

const parent = document.getElementById('div'); //✅adding created and updated paragraph to div
parent.appendChild(para);

const child = document.getElementById('p1'); //we choose element before which we want to insert data
const para2 = document.createElement('p');
const newText = para2.innerHTML = 'loki';
parent.insertBefore(newText, child); //✅this will add new para2 before p1

const para3 = document.createElement('p');
const newTexts = para3.innerHTML = 'lo2526ki';
parent.replaceChild(newTexts, child); //🔄replacing child with newText

parent.removeChild(para3); //❌removing para3

child.parentNode.removeChild(child); //⚠️ in case you don't know the parent