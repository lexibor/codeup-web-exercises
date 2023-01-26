const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const moreThanThreeLang = users.filter(user => user.languages.length >= 3);

console.log(moreThanThreeLang);

const userEmails = users.map(user => user.email);

console.log(userEmails);


const yearsOfExp = users.reduce((accumulator, val) => accumulator + val.yearsOfExperience, 0);

console.log(yearsOfExp);

const longestEmail = userEmails.reduce((longest, current) => (current.length > longest.length) ? current : longest);

console.log(longestEmail)

const allUsers = users.reduce((prev, current, i) => i === 0 ? current.name : `${prev}, ${current.name}`, '');

console.log(`Your instructors are: ${allUsers}`);



/////////// BONUS ///////////

let allLang = [];
for(user of users)
{
    allLang.push(...user.languages);
}

console.log(allLang);

const uniqueLang = allLang.reduce((prev, current) => (prev.includes(current)) ? prev : [...prev, current] , []);

console.log(uniqueLang);

