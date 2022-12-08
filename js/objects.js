(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName: 'Alexia',
        lastName: 'Briones Ornelas',
        sayHello: function()
        {
            return `Hello from ${this.firstName} ${this.lastName}`
        }
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello());

    console.log('')

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
        if(shopper.amount > 200)
        {
            let savings = parseFloat(shopper.amount) * 0.12.toFixed(2);
            let total = (parseFloat(shopper.amount) - (savings)).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
            console.log(`${shopper.name} pays ${total} after the discount, they saved $${savings}`)
        }
        else
        {
            //console.log(shopper.name)
            console.log(`${shopper.name} does not get a discount :( they have to pay ${shopper.amount}`);
        }
    });


    console.log('')

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // const books = [
    //     {
    //         title: 'Lord of the Rings',
    //         author: {
    //             firstName: 'JRR',
    //             lastName: 'Tolkien'
    //         }
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: {
    //             firstName: 'JK',
    //             lastName: 'Rowling'
    //         }
    //     },
    //     {
    //         title: "Howl's Moving Castle",
    //         author: {
    //             firstName: 'Diana Wynne',
    //             lastName: 'Jones'
    //         }
    //     },
    //     {
    //         title: 'Of Mice and Men',
    //         author: {
    //             firstName: 'John',
    //             lastName: 'Steinbeck'
    //         }
    //     },
    //     {
    //         title: "The Handmaid's Tale",
    //         author: {
    //             firstName: 'Margaret',
    //             lastName: 'Atwood'
    //         }
    //     }
    // ]


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // for(let i = 0; i < books.length; i++)
    // {
    //     //console.log(`Book #${i + 1}\nTitle: ${books[i].title}\nAuthor: ${books[i].author}\n---`);
    //     showBookInfo(books, i);
    //
    // }



    console.log('')
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author)
    {
        let book = {
            title: title,
            author: author
        }

        return book;
    }

    const books = [
        createBook('Lord of The Rings: The Fellowship of the Ring', 'J.R.R Tolkien'),
        createBook('The Silmarillion', 'J.R.R Tolkien'),
        createBook("Howl's Moving Castle", 'Diana Wynne Jones'),
        createBook("The Handmaid's Tale", 'Margaret Atwood'),
        createBook("Of Mice and Men", 'John Steinbeck')
    ];

    // books.push(createBook('Lord of The Rings: The Fellowship of the Ring', 'J.R.R Tolkien'));
    // books.push(createBook('The Silmarillion', 'J.R.R Tolkien'));
    // books.push(createBook("Howl's Moving Castle", 'Diana Wynne Jones'));
    // books.push(createBook("The Handmaid's Tale", 'Margaret Atwood'));
    // books.push(createBook("Of Mice and Men", 'John Steinbeck'));


    // books.forEach((function(book, i){
    //     showBookInfo(book, i);
    // }))

    function showBookInfo(obj, index)
    {
        //let i = index - 1;
            console.log(`Book #${index + 1}\nTitle: ${obj[index].title}\nAuthor: ${obj[index].author}\n---`);

    }

    //showBookInfo(books, 1);
    for(let i = 0; i < books.length; i++)
    {
        //console.log(`Book #${i + 1}\nTitle: ${books[i].title}\nAuthor: ${books[i].author}\n---`);
        showBookInfo(books, i);

    }

})();