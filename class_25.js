// 26 class // Array Constant
const cars = ['Saab','Volvo','BMW'];

cars[0]= 'Toyota';

cars.push("Audi");

console.log(cars);

// Dates 
const d = new Date();
console.log("-------------");
console.log(d);
console.log("-------------");
const a = d.toDateString();
console.log(a);
console.log("-------------");
const b = d.toUTCString();
console.log(b);

console.log("-------------");
const c = d.toISOString();
console.log(c);

//27 class // Date format
console.log("-------------");
const e = new Date("2015-03-25");
console.log(e);

//28 class // Get date methods
const time = new Date()
const t = time.getTime();
console.log("-------------");
console.log(t);

const year = time.getFullYear();
console.log("-------------");
console.log(year);

const month = time.getMonth();
console.log("-------------");
console.log(month);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dt = new Date("2021-03-25");
let montha = months[d.getMonth()];
console.log("-------------");
console.log(montha);

// 29 class Date set methods
var date = new Date()
date.setFullYear(2020);
console.log("-------------");
console.log(date);

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

console.log("-------------");
console.log(today);
console.log(someday);

if (someday > today) {
    console.log("Today is before January 14, 2100.");
} else {
    console.log("Today is after January 14, 2100.");
}


// class 30 // math object
console.log("-------------");
console.log(Math.E ,      // returns Euler's number
    Math.PI   ,    // returns PI
    Math.SQRT2   , // returns the square root of 2
    Math.SQRT1_2 , // returns the square root of 1/2
    Math.LN2  ,    // returns the natural logarithm of 2
    Math.LN10  ,   // returns the natural logarithm of 10
    Math.LOG2E   , // returns base 2 logarithm of E
    Math.LOG10E);

let x = 2.54234;
console.log(Math.round(x)	,
Math.ceil(x)	,
Math.floor(x)	,
Math.trunc(x),
Math.abs(x),
Math.sin(90 * Math.PI / 180),
Math.floor(Math.random() * 10))

console.log(Math.floor(Math.random() * 10))
console.log(Math.floor(Math.random() * 100)+1)
