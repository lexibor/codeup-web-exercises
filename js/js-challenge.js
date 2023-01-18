//
// // const pets = [
// //     {
// //         name: 'Sparky',
// //         type: 'Fish',
// //         age: 4
// //     },
// //     {
// //         name: 'Mr. Pig',
// //         type: 'Cat',
// //         age: 4
// //     },
// //     {
// //         name: 'Bubba',
// //         type: 'Dog',
// //         age: 5
// //     },
// //     {
// //         name: 'Pickles',
// //         type: 'Dog',
// //         age: 10
// //     }
// //
// // ];
//
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
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];
//
// function findAverageDogAge(arr)
// {
//     let avg = 0;
//     let count = 0;
//
//         for(let i = 0; i < arr.length; i++)
//         {
//             if(arr[i].type === 'Dog')
//             {
//                 avg += arr[i].age;
//                 count++;
//
//             }
//         }
//     return avg / count;
// }
//
// console.log(findAverageDogAge(pets)); // returns 7.5
//
//
// function returnLongestPetName(arr)
// {
//     let longestName = '';
//
//     // for(let i = 0; i < arr.length; i++)
//     // {
//     //     // console.log(arr[i].name.length, arr[i].name);
//     //     if(arr[i].name.length > longestName.length)
//     //     {
//     //         longestName = arr[i].name;
//     //     }
//     // }
//     //
//     arr.forEach(function(pet){
//         if(pet.name.length > longestName.length)
//         {
//             longestName = pet.name;
//         }
//     });
//
//     return longestName;
//
// }
// console.log(returnLongestPetName(pets)); //returns Mr. Salmon
//
//
// function returnLastTwoChars(str)
// {
//     return str.slice(-2);
// }
//
// console.log(returnLastTwoChars('hello'));
//
// function returnLastCharsReversed(str, num)
// {
//     return str.slice(-num).split('').reverse().join('');
// }
//
// console.log(returnLastCharsReversed('codeup', 3));
//
//
// // ================================= WARM UP
// // Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.
// // iBeforeE(‘ei’) // returns ‘ie’
// // iBeforeE(‘height’) // returns ‘hieght’
// // iBeforeE(‘heist’) // returns ‘hiest’
// // iBeforeE(‘their’) // returns ‘thier’
// // iBeforeE(‘theirtheir’) // returns ‘thierthier’
//
//
// function iBeforeE(str)
// {
//     let newStr = '';
//     if(str.includes('ei'))
//     {
//         newStr =  str.replaceAll('ei', 'ie');
//     }
//
//     return newStr;
// }
//
// console.log(iBeforeE('ei'));
// console.log(iBeforeE('height'));
// console.log(iBeforeE('theirtheir'));
//
// // ================================= WARM UP
// // Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// // filterList([1,2,‘a’,‘b’]) // returns [1,2]
// // filterList([1,‘a’,‘b’,0,15]) // returns [1,0,15]
// // filterList([1,2,‘aasf’,‘1’,‘123’,123]) // returns [1,2,123]
//
// function filterList(arr)
// {
//     let numArr = [];
//     arr.forEach(function(num){
//         if(typeof num !== 'string' && num > 0)
//         {
//             numArr.push(num);
//         }
//     });
//
//     return numArr.join(', ');
// }
//
// console.log(filterList([1,2,'a','b'])); // returns [1,2]
// console.log(filterList([1,'a','b',0,15]));// returns [1,0,15]
// console.log(filterList([1,2,'aasf','1','123',123,-1])); // returns [1,2,123]
//
//
//
//
// // ================================= WARM UP
// //
// // Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.
// //
// //
// // zipArrays([], []) // returns []
// // zipArrays([1], [2]) // returns [1, 2]
// // zipArrays(['a', 'b'], ['c', 'd']) // returns... ['a', 'c', 'b', 'd']
// // zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]) // returns...
// //
// //     [
// //     1,
// //         'bob',
// //         2,
// //         null,
// //         'a',
// //         'sally',
// //         'b',
// //         25
// //     ]
//
// function zipArrays(arr1, arr2)
// {
//     let finalArr = [];
//     for(let i = 0; i < arr1.length; i++)
//     {
//         finalArr.push(arr1[i], arr2[i]);
//     }
//     return finalArr;
// }
//
//
//
// console.log(zipArrays(['a', 'b'], ['c', 'd'])); // returns... ['a', 'c', 'b', 'd']
// console.log(zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25])) // returns... [1, 'bob', 2, null, 'a', 'sally', 'b', 25]

// ================================= WARM UP
//
// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.

//
//     const users = [
//     {
//         firstName: 'Justin',
//         lastName: 'Reich',
//         dob: '1923-01-01',
//         username: 'jreich',
//         password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         dob: '1935-03-11',
//         username: 'ssmith',
//         password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         dob: '1999-01-21',
//         username: 'fsmith',
//         password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//     },
// ]
//
//
// function getUserCredentials(userArr)
// {
//     let objArr = [];
//
//     userArr.forEach(function(arr){
//         let newObj = {
//             username: arr.username,
//             password: arr.password
//
//         }
//         objArr.push(newObj);
//     });
//
//     return objArr;
// }
//
// console.log(getUserCredentials(users)); // returns...

/*

[
  {
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  }
]

*/

// This loop should print the numbers from 0 through 9 in the console

// for (let i = 0; i < 10; i++) {
//     console.log("The value of i is " + i);
//     // i++;
// }

// desired output : 0, 1 ,2,  3, 4, 5, 6, 7, 8, 9

//
// ================================= WARM UP
//
// // Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
//
// // example data...
//
const neighborhood1 = {
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 6},
        {name: "High School", rating: 8}
    ]
};

const neighborhood2 = {
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "high",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 8},
        {name: "High School", rating: 8}
    ]
}

const neighborhood3 = {
    neighborhood: "Oak Mountain",
    medianHomePrice: 290000,
    pool: false,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 8},
        {name: "High School", rating: 8}
    ]
}

const neighborhood4 = {
    neighborhood: "Ginormous Acres",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 9},
        {name: "Middle School", rating: 9},
        {name: "High School", rating: 9}
    ]
}
//
console.log(isGoodNeighborhood(neighborhood1)) // returns false due to school rating
console.log(isGoodNeighborhood(neighborhood2)) // returns false due to crime rate
console.log(isGoodNeighborhood(neighborhood3)) // returns true
console.log(isGoodNeighborhood(neighborhood4)) // returns false due to median home price



function isGoodNeighborhood(neigh)
{
    let rateSum = 0;

    for(let i = 0; i < neigh.schools.length; i++)
    {
        rateSum += neigh.schools[i].rating;
    }

    if(rateSum >= 24 && neigh.medianHomePrice < 300000 && neigh.crimeRate === 'low')
    {
        return true;
    }

    return false;

}