// console.log("hello");
// console.log(parseInt("10 20 30"));
// const name = ['Rasu', 'Santo','Siha']
// console.log(typeof name) 
// for(i =0; i< name.length; i++){
//     console.log(name[i]);
// }

const fruits = ['Banana', 'Orange', 'Apple','Mango'];
let flen = fruits.length;
fruits.push("Lemon");
fruits[fruits.length]="Tomato"

// text = "<ul>";
// for (let i = 0; i < flen; i++){
//     text += "<li> + fruits[i] + </li>";
// }
// text += "</ul>";
// console.log(text)

// function myFunction(value){
// console.log(value);
// }

// fruits.forEach(myFunction);

// console.log(fruits.toString())
fruits.join(" * ")
delete fruits[0];
console.log(fruits)
console.log(fruits[0])

// Splicing an Array

fruits.splice(2,0, 'Lemon', 'Kiwi');
console.log(fruits)

const points = [40,100,1,5,25,10];
points.sort(function(a, b){
    return 0.5 - Math.random();
});

console.log(points);

console.log(Math.max(2,4,5,6));
console.log(Math.min(2,4,5,6));

const cars = [
    {type: "Volvo" , year: 2016},
    {type: "Saab" , year: 2001},
    {type: "BMD" , year: 2010},
]

// cars.sort(function(a,b){
//     return a.year - b.year
// });
// console.log(cars);

cars.sort(function(a,b){
    let x = a.type.toLowerCase();
    let y = a.type.toLowerCase();
    if (x<y) {return -1}
    if (x>>y) {return 1}
    return 0;
});

console.log(cars);

//  Array Iteration 
const point = [40,100,1,5,25,10];

function myFunction(value,index,array){
    console.log(value);
    console.log(index);
    // console.log(array);
}

points.forEach(myFunction);

// Map
function mymap(value){
    return value * 2;
}
const new_number = point.map(mymap);

console.log(new_number);

// Filter
function mymap(value,index,array){
   return value > 10;
}

const new_number1 = point.filter(mymap);

console.log(new_number1);

// Reduce
const red=[2,4,8,5,3,6]
function myred(total,value,index,array){
    // console.log(total);
    // console.log('----');
    return total + value;
 }
 
 const new_number2 =red.reduce(myred,10);
 
 console.log(new_number2);

 //Every
 function myred(total,value,index,array){
    return value > 6;
 }
 
 const new_number3 =red.every(myred);
 
 console.log(new_number3);

 const fruitss = ['Banana', 'Orange','Apple','Mango'];

 console.log(fruitss)
 let position = fruitss.indexOf("Apple") + 1;
 let position_last = fruitss.lastIndexOf("Mango") + 1;
 console.log(position);
 console.log(position_last);


 const present = fruitss.includes("Mango");
 console.log(present);
 console.log(Array.from("ABCDEF"));

 const keys = fruitss.keys();
 console.log(keys);


 //24 videos is done