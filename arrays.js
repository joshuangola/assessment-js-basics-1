//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

// fist we make a new variable and set it equal to our original variable with .slice to create a new Array
let colorCopy = faveColors.slice(0);
console.log(colorCopy);
//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

// here we are using .push to add blue to the variable that we created in the last problem
colorCopy.push('blue');
console.log(colorCopy);

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
// like the first problem we use slice to make a new array but we only want the middle numbers so we use .slice(1,4) the fist input in slice uses position to count so it starts at 0, the second input uses length so we start counting from 1
let middleNums = numbers.slice(1,4);
console.log(middleNums);

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE

// fist we create an array to store our answers. we then use for loop with an if else statement inside it to check if a number is greater or equal to 100.
let answers = [];

for (let i = 0; i < bigOrSmallArray.length; i++) {
if (bigOrSmallArray[i] > 100) {
answers.push('big');
} else {
answers.push('small');
}
}

console.log(answers);
