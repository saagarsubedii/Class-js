//1. output should be "hello hari"
const output = "hello " + "hari";
console.log(output);

//output should be "ari"
let name = "hari";
const output1 = name.slice(1, 3);
console.log(output1);

//output should be "HARI"
let  name1 = 'hari';
const output2 = name1.toUpperCase();
console.log(output2);

//output should be "hari123" 
let name2 = 'hari';
const output3 = name2.concat('123');
console.log(output3);

//measure length of string
let bird = 'sparrow';
const result = bird.length;
console.log(result);


let language  = 'typescript';
//output shoyld be in"javascript"
console.log(language.replace('type', 'java'));

let greeting = '   hello world   ';
//output should be "hello world"
console.log(greeting.trim());


const language1 = 'nodejs';
//output should be "js"
console.log(language1.length);

//find the index of 'j' in nodejs ,output should be 4
console.log(language1.indexOf('j'));

//check if the framework variable contain 'js', output should be true
console.log(language1.includes('js'));





