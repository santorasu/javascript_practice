// class 31 Problem solving

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1,6));

const students = ['Santo', 'Rasu', 'Farhan','Durjoy'];

console.log(students.sort());


const roll = [3,4,5,9,7,3,2];
console.log(roll.sort(function(a,b){
    return a - b;
}));

function isLeapYear(year){
    if( year % 400 === 0 || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(`${year} is a leap year!`)
    } else {
        console.log(`${year} is not a leap year!`)
    }
}

isLeapYear(2020)



const vowels = ['a','e','i','o','u','A','E', 'I','O','U'];

function countVowels(sentence){
    let count = 0;
    const letter = Array.from(sentence);
    letter.forEach(function(value, index, array){
        if(vowels.includes(value))
        {
            count++;
        }
    });
    return count;
}

console.log(countVowels("I am Santo Rasu"));


const numbers = [1,4,5,5,6,7,6,8,9,10,4];
 const duplicates = numbers.filter(function(value,index, array){
    return array.indexOf(value) !== index;
 });
 console.log(duplicates);