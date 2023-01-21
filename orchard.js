///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
// first we create a variable to track our totalAcres. then we create our for loop that will run for the length of the above arrays. when adding arrays make sure you use the += sign when adding to totalAcres. if you use just = it will just right over the first variable input in your array.
let totalAcres = 0;
for(let i = 0; i < fujiAcres.length; i++){
totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}
console.log(totalAcres);




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
// there are 7 days in the week so you divide totalAcres by 7 to get your average. You also could divide by the length of one of the arrays above like i did in problem 1. I divided by 7 to show another way of doing it but i would prefer doing it like i did in problem 1 just incase the days farmed ever changes in the array it will not break this section of code.
let averageDailyAcres = totalAcres/7;

console.log(averageDailyAcres);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
// I quite liked this one and it made me think a lot. once i realized how to do it though it was quite simple and satisfying to write. this while loop just lets us increase the day and every time the day goes up by 1 it will -averageDailyAcres from acresLeft until acresLeft reaches 0 the the loop will stop and we will see how many days it took.
while(acresLeft > 0){
    days++;
    acresLeft -= averageDailyAcres;
    }
    console.log(days);


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
// this was a simple for loop that lets us push our answers into our new variable to get the tons of apples. after completing this it does work but in the future i may want to create a variable for tonsPerAcher. that way in the future if the 6.5 ever changes i just have to change the variable and not find everywhere i put in 6.5

// let fujiTons =
// let galaTons =
// let pinkTons =

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

for(let i = 0; i < 7; i++){
    fujiTons.push(fujiAcres[i] * 6.5);
    galaTons.push(galaAcres[i] * 6.5);
    pinkTons.push(pinkAcres[i] * 6.5);
    }

    console.log(fujiTons);
    console.log(galaTons);
    console.log(pinkTons);


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
// this is very similar to the last problem and i also can take the 2000 and put it in a "const ton = 2000"

// let fujiPounds =
// let galaPounds =
// let pinkPounds =
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

for(let i = 0; i < 7; i++){
    fujiPounds += fujiTons[i] * 2000;
    galaPounds += galaTons[i] * 2000;
    pinkPounds += pinkTons[i] * 2000;
    }
    console.log(fujiPounds);
    console.log(galaPounds);
    console.log(pinkPounds);



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
// here is just simple math profit will = pounds * price

// let fujiProfit =
// let galaProfit =
// let pinkProfit =

let fujiProfit = 0;
let galaProfit = 0;
let pinkProfit = 0;

fujiProfit = fujiPounds * fujiPrice;
galaProfit = galaPounds * galaPrice;
pinkProfit = pinkPounds * pinkPrice;

console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);




// PROBLEM 7
// this was by far the hardest problem of the assessment. adding the fujiProfit+galaProfit+pinkProfit to get totalProfit :)

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(totalProfit);