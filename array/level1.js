const arr = [23,24,25,26];
// add 9 at the end of the array
 arr.push(9);
 console.log(arr);




//remove the first element  from array
arr.shift(0);
console.log(arr);


const arr2 = [1,2,3,4,5];
//concart  two arrays
const newarr = arr.concat(arr2);
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




