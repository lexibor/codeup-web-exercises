console.log('');
let i = 1;
while(i <= 16)
{
    console.log(Math.pow(2, i));
    i++
}
console.log('')

let allCones = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
let conesSold;
console.log("All cones " + allCones);
do
{
    conesSold = Math.floor(Math.random() * 5) + 1;
    //console.log("cones sold " + conesSold);
        if(allCones === 0)
        {
            console.log('Sold all cones!! Yay!!!');
            break;
        }
        else if(allCones >= conesSold)
        {
            allCones = allCones - conesSold;
            console.log(`${conesSold} cones sold... ${allCones} remaining`);

            //console.log("all cones " + allCones);
            //console.log('');
        }
        else if(allCones < conesSold  || allCones !== 0)
        {
        console.log(`I cannot sell you ${conesSold}, I only have ${allCones}`);
        //continue;
        }
        //i++;

}while(allCones >= 0)

console.log('')

//////////////////////////EXTRA/////////////////////////////

//first 50 fibonacci numbers

console.log('The first 50 Fibonacci numbers are: ');
let a = 0;
let b = 1;
let fib = 0;

for(let i = 0; i < 50; i++)
{
    console.log(fib);
    fib = a + b;
    b = a;
    a = fib;
}

//first 50 prime numbers

console.log('');
console.log('The first 50 prime numbers are:');

function isPrime(num)
{
    if(num < 2)
    {
        return false;
    }

    for(let i = 2; i < num; i++)
    {
        //console.log(i);
        if(num % i === 0)
        {
            return false;
        }
    }
    return true;
}

for(let i = 0; i < 100; i++)
{
    if(isPrime(i))
    {
        console.log(i);
    }
}

// while(i <= 50)
// {
//     if(isPrime(i))
//     {
//         console.log(i);
//
//     }
// }