//scope it means where a variable is accessible in your code.
//1.global scope means variable declared outside any function or block. accessible anywhere in the code.
let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);

//2.function scope means variable declared inside a function. accessible only within that function.
function fun2(){
    
    // This variable is local to fun2() and 
    // cannot be accessed outuside this function
    let x = 10;
    console.log(x);
}

fun2();

function myfunction(){
    const y =50;
    let z =70;
     k = y+ z;
    console.log(k);
}

myfunction();

//3.Block Scope means variable declared inside a block (enclosed in curly braces {}). accessible only within that block.
{
    let name = "xyz";
    const age = "12";

console.log(name,age);
}
//console.log(name); //error

//Variable and Constant
//1.var
var name = "jimmy";
console.log(name);
//it is accssiable anywhere in the function or globally if declared outside any function.

//2.let
let bird = "egale";
console.log("it is an " + bird);

let programmer = "abc";
{
    console.log("the programmer is " + programmer);
    programmer ="anish";
    console.log("the programmer is " + programmer);
}
//it is accessible only within the block it is declared.
//const it means constant value which cannot be changed.
const pi = 3.14;
console.log("the value of pi is " + pi);
//if we wanat to redeclare it it will error
//const pi = 7.77;
//console.log( "the value of pi is " + pi); //error

//hoisting





/*nst b = 12;
var c = 50;
let e =100;
let f;
{
   
    const a =4;
    var d =a + b + c;
     f = d+ e;
     console.log(f);

}
console.log(d);*/




