
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