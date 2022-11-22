// let city = prompt('What city do you live in?');
// if (city == 'Boston')
// {
//     console.log('The location is Boston');
// }
// else if(city == 'San Antonio')
// {
//     console.log('The location is San Antonio');
// }
// else
// {
//     console.log('Where?');
// }

//ternary if/else statement (shorthand)////////////////////////////

let success = false;
//let message;

//normal if/else
// if(success)
// {
//     message = "Operation was successful.";
// }
// else
// {
//     message = "Oops, something went wrong.";
// }


//ternary statement//////
let message = (success) ? "Operation was successful." : "Oops, something went wrong.";

console.log(message);

//switch statemenets//////////////////////
// let pizzaPref = prompt('Favorite type of pizza?');
// switch(pizzaPref)
// {
//     case 'cheese':
//         console.log("Thanks Kevin from Home Alone!")
//         break;
//
//     case 'pineapples and hot sauce':
//         console.log('I like pineapples and hot sauce too!')
//         break;
//
//     default:
//         console.log('Okay...');
//         break;
// }

//determine if the variable is between 5-8

let number = 7;
switch(number)
{
    case 1:

    case 2:

    case 3:

    case 4:
        console.log('the number came before 5');
        break;

    case 5:

    case 6:

    case 7:

    case 8:
        console.log('the number came between 5 and 8');
        break;

    default:
        console.log('the number came after 8');

}