(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['Mario', 'Link', 'Ranni', 'Ludwig'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(`There are ${names.length} names in the names array`);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log('');

    // for(let i = 0; i < names.length; i++)
    // {
    //     console.log(names[i]);
    // }

    names.forEach(function(names){
        console.log(`Hi, ${names}!`)
    });


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log('')

    console.log(first([1, 2, 3, 4, 5])) // returns 1

    function first(array)
    {
        return array[0];
    }

    console.log('');
    console.log(second([1, 2, 3, 4, 5]));

    function second(array)
    {
        return array[1];
    }

    console.log('');
    console.log(last([1, 2, 3, 4, 5]));
    console.log(last(names));

    function last(array)
    {
        return array[array.length -1];
    }

    console.log('')


////////////////////////////////////EXTRA////////////////////////////////////////////////


    // Write a function, addEvenNums, that takes in an array of numbers
    // and adds up only the even numbers in the array and returns the sum of the even numbers.
    // Assume any array inputs will only contain valid number elements and be non-empty.

    let numbers = [1, 2, 3, 4, 5];
    console.log('sum of array is: ' + addEvenNums(arrOfRandomNums(10, 1, 15)));


    console.log(addEvenNums(numbers));
    function addEvenNums(arr)
    {
        let sum = 0;
        for(let i = 0; i < arr.length; i++)
        {
            if(isEven(arr[i]))
            {
                sum += arr[i]
            }
            else
            {
                continue;
            }

        }

        return sum;
    }


    console.log('');


//     Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
// ‘input num in input array’ if the second argument is an element in the first argument array
//     otherwise, the function should return the string ‘input num NOT in input array’

    console.log('');
   // let numbers = [2, 4, 6 ,8, 10];

    console.log(checkIfNumInArray(arrOfRandomNums(10, 5, 15), 6));

    function checkIfNumInArray(arr, num)
    {
        for(let i = 0; i < arr.length; i++)
        {
            if(num === arr[i])
            {
                return `${num} is in ${arr} array`;
            }
        }
        return `${num} is NOT in ${arr} array`;
    }

/******** EXTRA FUNCTIONS *********************/

    function arrOfRandomNums(length, min, max) //generates an array with a set length and set range of random nums
    {
        let arr = [];
        for(let i = 0; i < length; i++)
        {
            arr.push(randomNum(min, max));
        }
        console.log(arr);
        return arr;
    }
    //console.log(arrOfRandomNums(10, 3, 20));

    function randomNum(min, max)
    {
        return  Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function isEven(num)
    {
        return num % 2 === 0;
    }


})();