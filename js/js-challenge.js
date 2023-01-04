
// const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Pickles',
//         type: 'Dog',
//         age: 10
//     }
//
// ];

const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];

function findAverageDogAge(arr)
{
    let avg = 0;
    let count = 0;

        for(let i = 0; i < arr.length; i++)
        {
            if(arr[i].type === 'Dog')
            {
                avg += arr[i].age;
                count++;

            }
        }
    return avg / count;
}

console.log(findAverageDogAge(pets)); // returns 7.5


function returnLongestPetName(arr)
{
    let longestName = '';

    // for(let i = 0; i < arr.length; i++)
    // {
    //     // console.log(arr[i].name.length, arr[i].name);
    //     if(arr[i].name.length > longestName.length)
    //     {
    //         longestName = arr[i].name;
    //     }
    // }
    //
    arr.forEach(function(pet){
        if(pet.name.length > longestName.length)
        {
            longestName = pet.name;
        }
    });

    return longestName;

}
console.log(returnLongestPetName(pets)); //returns Mr. Salmon


function returnLastTwoChars(str)
{
    return str.slice(-2);
}

console.log(returnLastTwoChars('hello'));

function returnLastCharsReversed(str, num)
{
    return str.slice(-num).split('').reverse().join('');
}

console.log(returnLastCharsReversed('codeup', 3));


// ================================= WARM UP
// Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.
// iBeforeE(‘ei’) // returns ‘ie’
// iBeforeE(‘height’) // returns ‘hieght’
// iBeforeE(‘heist’) // returns ‘hiest’
// iBeforeE(‘their’) // returns ‘thier’
// iBeforeE(‘theirtheir’) // returns ‘thierthier’


function iBeforeE(str)
{
    let newStr = '';
    if(str.includes('ei'))
    {
        newStr =  str.replaceAll('ei', 'ie');
    }

    return newStr;
}

console.log(iBeforeE('ei'));
console.log(iBeforeE('height'));
console.log(iBeforeE('theirtheir'));

// ================================= WARM UP
// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]) // returns [1,0,15]
// filterList([1,2,‘aasf’,‘1’,‘123’,123]) // returns [1,2,123]

function filterList(arr)
{
    let numArr = [];
    arr.forEach(function(num){
        if(typeof num !== 'string' && num > 0)
        {
            numArr.push(num);
        }
    });

    return numArr.join(', ');
}

console.log(filterList([1,2,'a','b'])); // returns [1,2]
console.log(filterList([1,'a','b',0,15]));// returns [1,0,15]
console.log(filterList([1,2,'aasf','1','123',123,-1])); // returns [1,2,123]
