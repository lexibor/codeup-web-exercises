
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
        name: 'Pickles',
        type: 'Dog',
        age: 10
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