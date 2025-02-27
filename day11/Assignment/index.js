//Question no - 01
// Problem 1: Create a Student Management System (Using Objects) 
const student = {
    name: "sheikhzahid",
    roll: 236,
    marks:{
        Math: 80,
        Scirnce: 65,
        English: 50,
        History: 70
    },
    getAverageMarks:() => {
       return averagemarks = (80+65+50+70)/4;   
    },
    checkPassOrFail:() => {
        return 
        if(averagemarks>40){
            passed;
        }else{
            failed;
        }
    }

};

console.log(student.getAverageMarks());
console.log(student.checkPassOrFail());

// output: 66.25

// Question no - 02
// Problem 2: Library System (Nested Objects & Methods) 

// const library = { 
//     books: { 
//     "Atomic Habits": { author: "James Clear", availableCopies: 3 }, 
//     "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 }, 
//     }, 
//     borrowBook: function(bookName) { 
//     // Logic for borrowing a book 
//     }, 
//     returnBook: function(bookName) { 
//     // Logic for returning a book 
//     } 
// }; 

// Question no - 03
// Problem 3: Generate Multiplication Table (For Loop) 
function generateTable(number,limit){
      for(let i=1; i<=limit; i++)
      console.log(`${number} x ${i} = ${number * i}`);
}
generateTable(5, 10);

// output
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 4
// 5 x 9 = 45
// 5 x 10 = 50

// Question no - 04
// Write a function fizzBuzz(n) that prints numbers from 1 to n

function fizzBuzz(n){
    for(let i=1; i<=n; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("fizzBuzz");
        }else if(i%3 == 0){
            console.log("Fizz");
        }else if(i%5 == 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
// fizzBuzz(15);
// output
// 1 
// 2 
// Fizz 
// 4 
// Buzz 
// Fizz 
// 7 
// 8 
// Fizz 
// Buzz 
// 11 
// Fizz 
// 13 
// 14 
// FizzBuzz

// Question no - 05
// Write a function reverseString(str) that takes a string and reverses it without using .reverse() 
// method. 
function reverseString(str){
    let newStr = "";
    for(let i=str.length-1; i>=0; i--){
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString("reverse"));

// // output
// esrever

// Question no - 06
// Write a function removeDuplicates(arr) that removes duplicate elements from an array without 
// using Set(). 
function removeDuplicates(arr){
    let arr = {};
    let newarr = [];
    for(let i=0; i<arr.length; i++){
        if(!arr[i]){
            arr[i] == true;
            newarr.push(i);
        }
    }
    return newarr;
}
console.log(removeDuplicates[1, 2, 3, 4, 5, 1, 6]);
//output
// [1, 2, 3, 4, 5, 6]

// Question no - 07
// Write a function longestWord(sentence) that finds the longest word in a given sentence. 
function longestWord(sentence) {
    let words = sentence.split(" "); // Convert Sentence to Array
    let largewords = " ";
    for(let i=0; i<words.length; i++){
        if(words[i].length > largewords.length){
            largewords = words[i];
        }
    }
    return largewords;
}
console.log(longestWord("Coding is amazing and challenging")); 


//output
// challenging

// Question no - 08
// avaScript has a built-in .map() method, but can you create your own version of it? Write a function 
// myMap(arr, callback) that takes an array and a callback function and applies the callback to each 
// element. 
let arr = [1, 2, 3, 4];

let newarr = arr.map((val) => {
       return val*2;
});
console.log(newarr);

// output
// [2, 4, 6, 8]

// Question no - 09
// Write a function firstUniqueCharacter(str) that returns the first non-repeating character in a given 
// string.
function firstUniqueChar(str){
    let charCount = {};

    for(let char of str){
        if(charCount[char] === undefined){
            charCount[char] = 1;
        }else{
            charCount[char]++;
        }
    }

    for(let char of str){
        if(charCount[char] === 1){
            return char;
        }
    }
    return null;
}

console.log(firstUniqueChar("aabbcddce"));
// output
//e

// Question no - 10
// Write a function findPairs(arr, target) that finds all pairs of numbers in an array that sum to a given 
// target. 
function findPair(arr, target){
    let result = [];

    for(let i=0; i<=arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result;
}
console.log(findPair([2, 4, 3, 5, 7, 8, 9, 5], 10));
//output
[[2,8],[3,7]]