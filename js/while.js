console.log('');
let i = 1;
while(i < 17)
{
    let num = Math.pow(2, i);
    console.log(num);
    i++
}
console.log('')

let allCones = Math.floor(Math.random() * 50) + 50;
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
        } else if(allCones >= conesSold)
        {
            console.log(`${conesSold} cones sold... ${allCones} remaining`);
            allCones = allCones - conesSold;
            console.log("all cones " + allCones);
            //console.log('');
        }
        else if(allCones < conesSold  || allCones !== 0) {
        console.log(`I cannot sell you ${conesSold}, I only have ${allCones}`);
        //continue;


    }
        //i++;

}while(allCones >= 0)

console.log('')

//////////////////////////EXTRA/////////////////////////////

//first 50 fibonacci numbers

console.log('The first 50 Fibonacci numbers are: ');
let num1 = 0;
let num2 = 1;
let fib;

for(let i = 0; i < 50; i++)
{
    console.log(fib);
    fib = num1 + num2;
    num2 = num1;
    num1 = fib;
}

//first 50 prime numbers

console.log('');
console.log('The first 50 prime numbers are:');

