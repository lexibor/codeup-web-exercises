function showMultiplicationTable(num)
{
    let mult;
    for(let i = 1; i < 11; i++)
    {
        mult = num * i;
        console.log(`${num} x ${i} = ${mult}`);
    }
}
showMultiplicationTable(7);

//////even or odd for loop////////
console.log('');

for(let i = 0; i < 10; i++)
{
    let random = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    console.log(`${random} is ${evenOrOdd(random)}`);
}

//console.log('');

for(let i = 0; i < 10; i++)
{
    let numberStair = [];

    for(let j = 0; j < i; j++)
    {
        numberStair.push(i);
    }
    console.log(numberStair.join(''));
}

console.log('')

for(let i = 100; i > 0; i -= 5)
{
    console.log(i);
}

console.log('');


/////////////////////////////EXTRA FUNCTION//////////////////////////////////////

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