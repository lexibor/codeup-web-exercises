// -- Mini Exercise 1
// Create a few beverage objects and assign values to each object for the following properties:
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
// Define your objects using both literal syntax to create all properties and
// values at once and also try defining empty objects and assign property values in separate statements using the dot notation.

const beverage1 = {
    brandName: 'Coca-Cola',
    type: 'soda',
    volumeInLiters: 1,
    priceInCents:  500,
    expirationDate: '20XX',
    datesOfPreviousSips: ['Oct 10', 'Oct 11', 'Oct 20'],
    isOpen: 'Yes'
};
console.log(beverage1);
beverage1.flavor = 'Normal';

const beverage2 = {
    brandName: 'Jarritos',
    type: 'Soda',
    volumeInLiters: 1,
    priceInCents: 100,
    expirationDate: '20XX',
    datesOfPreviousSips: 'N/A',
    isOpen: false
};
console.log(beverage2);
beverage2.flavor = 'Punch'





//-- Mini Exercise 2
const users = [
    {
        givenName: 'Sam',
        age: 21
    },
    {
        givenName: 'Cathy',
        age: 34
    },
    {
        givenName: 'Karen',
        age: 43
    }
];
// 0. Log each given name
// 1. Log the names of all users in a single console log separated by spaces. // output = “Sam Cathy Karen”
// 2. Change the names of all users to “John Doe”
// 3. Increase the current age of all users by 1
// Can you accomplish each step using iteration?

users.forEach(function(user){
    console.log(user.givenName);
})


let newArr = [];
// for(let i = 0; i < users.length; i++)
// {
//     newArr.push(users[i]);
// }


users.forEach(function(user){
    newArr.push(user.givenName);
})

console.log(newArr.join(' '));

for(let i = 0; i < users.length; i++)
{
    console.log(users[i].givenName = 'John Doe');
    console.log(users[i].age += 1);
}