// math, science, opt math, opt comp

const obje = {
    level: 1,
    subject: "math",
    topics: ["algebra", "geometry", "trigonometry"],
}

// Q1. output should be trigonometry
console.log(obje.topics[2]);

//Q2. output should be 3 (number of topics)
console.log(obje.topics.length)


//Q3. add one level to the current level in the object
//expected output : level: 2
 // ---> write your code here
// console.log(obj.level)
obje.level = 2
console.log(obje.level)

const obj = {
    name: 'kaylin',
    scores: {
        math: 49,
        science: 40,
        computer: 40
    }
}

// Q1. // expected output : { math: 49, science: 40, computer: 40 }
console.log(obj.scores);


// Q2. expected output : 6 (calculate the total length of name)
console.log(obj.name.length);


//Q3.  expected output  : [49, 40, 40]
const scoreOutput = Object.values(obj.scores);
console.log(scoreOutput);



//Q4. expected output: [ 'math', 'science', 'computer' ]
console.log(Object.keys(obj.scores));