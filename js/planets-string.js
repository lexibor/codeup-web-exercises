(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|')
     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    console.log(planetsArray.join('<br>'));

    let planetsList = `<ul><li>${planetsArray.join('</li><li>')}</li></ul>`;
    document.getElementById("list").innerHTML = planetsList;










    // ** Create a function that will take in a formatted string of numbers and return an array of
    // phone numbers without any symbols. Console.log the output of the returned array.

    /* EXAMPLE...

        const phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';

        cleanPhoneNumbers(phoneNumbers);

        the above code should output the following...

           2105552020
           2305552020
           5125553030

    */

    const phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';

    console.log(phoneNumbers);

    function cleanPhoneNumbers(input)
    {
        let arr = input.split('\n');

        let commaString = arr.join(',');

        commaString = commaString.replace(/-/g, '')

        arr = commaString.split(',')

        return arr.join('\n');
    }

    console.log(cleanPhoneNumbers(phoneNumbers));
    console.log(cleanPhoneNumbers('210-803-1715'));


})();