//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 
// variable of my name
let myName = "Joshua";
//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
// variable of my favorite number
let faveNum = 7;
//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
// new variable with a boolean value of true
let lovesCode = true;
//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
// if statement checking if my number is 13 in this case it is not so it will console.log 'not luck 13'
if(faveNum === 13){
  console.log('lucky 13!');
  }else{
  console.log('not lucky 13');
  }
//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE
// this is a simple for loop. variable i is set to 0. it will increase by 1 each time the loop runs until i is = to 5 it will also log my faveNum each time the loop runs.
for(let i = 0; i < 5; i++){
  console.log(faveNum);
  }