const num1 =  656;
const num2 = 456;
//check if num1 is greater than num2 ,output should be false
console.log(num1> num2);

// check if both lang1 and lan2 have length ,output should be equal
const lang1 ='javascript';
const lang2 = 'typescript';
console.log(lang1.length === lang2.length);

//check if num2 is less than or equal to num1 ,output should be true
console.log(num2<= num1);

//check if num1 is not equal to num2 ,output should be true
console.log(num1!=num2);

//check if num1 is equal to num2 ,output should be false
console.log(num1 == num2);

//check if both lang1 and lang2 are not equal ,output should be true (strictly not equal to)
console.log(lang1 !== lang2);

//using and operator ,check if num1 is greater than num2 and lang1 length is greater than lang2 length ,output should be false
console.log((num1 > num2) && (lang1.length > lang2.length));

//using or operator ,check if num2 is less than num1 or lang2 length is greater than lang1 length ,output should be true
console.log((num2 < num1) || (lang2.length > lang1.length));