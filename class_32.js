let a = true;
console.log(a);
console.log(Boolean(10>11));

// Class 33 Comoparisons
let x= 5;
let y = "5";
console.log(x == y);

let x1= 5;
let y1 = "5";
console.log(x1 === y1);

let age =19;
if (age >= 14){
    console.log("Pass");
}
else{
    console.log("Under age")
}

console.log(age >= 18 ? "You are adult!" : "You are not adult!");

console.log(age >= 18 ? age <30 ? "You are adult!" : "you are old" : "You are not adult!");

// Class 34 Condition 
let time = 11;

if (time < 10) {
    console.log("Good morning");
  } else if (time < 20) {
    console.log("Good day");
  } else {
    console.log("Good evening");
  }

  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day);