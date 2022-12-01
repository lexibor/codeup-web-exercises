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
    console.log("cones sold " + conesSold);

    allCones = allCones - conesSold;


    if(allCones === 0)
    {
        console.log('Sold all cones!!');

    }
    else if(allCones > conesSold)
    {
        console.log(`${conesSold} cones sold... ${allCones} remaining`);
        console.log('');

    }
    else if(allCones < 0)
    {
        console.log(`I cannot sell you ${conesSold}, I only have ${allCones}`);
        continue;
        console.log('');
    }




    console.log("all cones " + allCones);

}while(allCones > 0)