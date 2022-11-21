(function () {
    //let userName = prompt('What is your name?');

    let message = myFunction('Alexia');
    console.log(message);

    let person1 = 'Billy',
        person2 = 'Bob';

    fight(person1, person2);
    fight('Lil Mac', 'Mario');
// let x = isEven(4376538745698);
// let y = isEven(4875);
// let l = isEven('jsergrjkhg');
// let iBreak = isEven(true);

    console.log(isEven(7));
    console.log(isEven(isEven(7)));

// console.log(x);
// console.log(y);
// console.log(l);
// console.log(iBreak);

    function myFunction(name)
    {
        //let name = 'Jason';

        return 'Thank you, ' + name + '. You have ran myFunction';
    }

    function fight(person1, person2)
    {
        console.log(person1 + ' punched ' + person2 + ' right in the kisser');
    }

    function isEven(num)
    {   //GET THE PIECES OF THE PUZZLE
        //Put the pieces of the puzzle into variables
        let number  = num;
        let answer = (number % 2 == 0);

        //finally return the answer
        return answer;
    }

})();

