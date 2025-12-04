const arr = [23,24,25,26];
// add 9 at the end of the array
 arr.push(9);
 console.log(arr);




//remove the first element  from array
arr.shift(0);
console.log(arr);


const arr2 = [1,2,3,4,5];
//concart  two arrays
//const newarr = arr.concat(arr2);
const newarr = [...arr, ...arr2];
console.log(newarr);

//calculate the total length of two number
const totalLength = arr.length + arr2.length;
console.log(totalLength);

//remove  last element from combine array
arr.pop();
console.log(newarr);

//remove the two element
//arr2.splice(1,2);
//console.log(arr2);

//arr2.splice(2,2 , "6" , "7");
//console.log(arr2);

//slice
arr2.slice(1,3);
console.log(arr2);

let ramScore = [95, 92, 87]
let shyamScore = [77,99,99]

// Q1. calcuate the length of array
let length = ramScore.length;
let length2 = shyamScore.length;
console.log(length,length2);


// Q2. get the output of last element of array and check if it is divisible by 21
let lastElement = (ramScore[ramScore.length -1] % 21 === 0);
console.log(lastElement);


// Q3. check if ram percentage is greater than shyam percentage
let ramPercentage = ( 95 + 92 + 87)/300 * 100;
let shyamPercentage = ( 77 + 92 +87)/300 * 100;
let result = ramPercentage > shyamPercentage;
console.log(result);





