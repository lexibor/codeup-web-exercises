"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// let colorChoice = prompt('Type in a color');
// let colorResult = analyzeColor(randomColor);
// console.log(colorResult);
//
// colorChoice = colorChoice.toLowerCase();
//
// analyzeColor(colorChoice);
function analyzeColor(color)
{
    // if(color === "red")
    // {
    //     console.log('Strawberries are red');
    // }
    // else if(color === 'blue')
    // {
    //     console.log('The sky is blue');
    // }
    // else if(color === 'green')
    // {
    //     console.log('The grass is green')
    // }
    // else
    // {
    //     console.log('Sorry I can only see RGB');
    // }

    switch(color)
    {
        case 'red':
            return 'Strawberries are red';
            break;
        case 'green':
            return 'Grass is green';
            break;
        case 'blue':
            return 'The sky is blue';
            break;
        default:
            return 'Sorry I can only see RGB';
            break;
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//var random = Math.floor((Math.random() * 6));
//console.log(random);
let totalAmount = prompt('What is your bill?');

function calculateTotal(num, total)
{
    //num = random;
    let discount;
    switch(num)
    {
        case 0:
            return total;
            break;
        case 1:
            discount = total - (total * 0.10);
            return discount;
            break;
        case 2:
            discount = total - (total * 0.25);
            return discount;
            break;
        case 3:
            discount = total - (total * 0.35);
            return discount;
            break;
        case 4:
            discount = total - (total * 0.50);
            return discount;
            break;
        default:
            return '0';
            break;
    }

    //
    // if(num == 0)
    // {
    //     return total;
    // }
    // else if(num == 1)
    // {
    //     discount = total - (total * 0.10);
    //     return discount;
    // }
    // else if (num == 2)
    // {
    //     discount = total - (total * 0.25);
    //     return discount;
    // }
    // else if (num == 3)
    // {
    //     discount = total - (total * 0.35);
    //     return discount;
    // }
    // else if (num == 4)
    // {
    //     discount = total - (total * 0.50);
    //     return discount;
    // }
    // else
    // {
    //     return `0`;
    // }

}
//console.log(calculateTotal(random, totalAmount));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber);
alert(`Your lucky number is ${luckyNumber}!
Your bill is $${totalAmount} before adding the discount
With the discount you are paying $${calculateTotal(luckyNumber, totalAmount)}`);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let userInp = prompt(`Please enter a number`);

numberEnter(userInp);

function numberEnter(num)
{
    let number = parseFloat(num);
    //console.log(number);
    if(typeof number == 'number' && !isNaN(number))
    {
        alert(`Your number is ${evenOrOdd(number)}
        If you were to add 100 to your number it would be ${number + 100}
        Your number is ${negOrPos(num)}`);
    }
    else
    {
        return alert(`You did not input a number.`);
    }
}
function evenOrOdd(num)
{
    if(num % 2 === 0)
    {
        return `Even`;
    }
    else
    {
        return `Odd`;
    }

}

function negOrPos(number)
{
    if(number > 0)
    {
        return 'positive';
    }
    else if(number < 0)
    {
        return 'negative';
    }
    else
    {
        return 'neither positive nor negative, it is 0';
    }
}
//////////////////EXTRA//////////////////////////////////////
function reverse(string)
{
    let stringArray = string.split('');
    let wordReverse = [];
    for(let i = stringArray.length - 1; i > -1; i--)
    {
        wordReverse.push(string[i]);
    }
    console.log(wordReverse);

    let newWord = wordReverse.join('');
    return newWord;
}
let word = prompt('Type a word');
console.log(reverse(word));


function add(a,b)
{
    return a + b;
}
function subtract(a, b)
{
    return a - b;
}
function multiply(a, b)
{
    return a * b;
}
function divide(a, b)
{
    return a/b;
}
function remainder(number, divisor)
{
    return number % divisor;
}
function square(a)
{
    return a * a;
}
 function sumOfSquares(a, b)
 {
     let sq1 = square(a);
     let sq2 = square(b);

     let sum = add(sq1, sq2);

     return sum;

 }

 // function doMath(operator, a, b)
 // {
 //
 // }

// write a function, abbrevToDay, that takes in a three-character abbreviation for the day of the week and returns the complete day of the week
// Example: abbrevToDay('mon') returns 'Monday'

function abbrevToDay(str)
{
    if(typeof str === 'string')
    {
        return 'That is not a valid string'
    }

    let day = str.toLowerCase();
    switch(day)
    {
        case 'mon':
            return 'Monday';
            break;
        case 'tue':
            return 'Tuesday';
            break;
        case 'wed':
            return 'Wednesday';
            break;
        case 'thu':
            return 'Thursday';
            break;
        case 'fri':
            return 'Friday';
            break;
        case 'sat':
            return 'Saturday';
            break;
        case 'sun':
            return 'Sunday';
            break;
        default:
            return 'Please just enter the first 3 letters of a day of the week.'
    }
}

console.log(abbrevToDay(34));
console.log(abbrevToDay('monday'));
console.log(abbrevToDay('wed'));