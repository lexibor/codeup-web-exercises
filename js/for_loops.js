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
console.log('EVEN OR ODD');

let random = Math.floor((Math.random() * 200) + 20);