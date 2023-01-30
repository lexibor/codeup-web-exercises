(async () => {
    "use strict";


    let username = prompt('Enter your github username please :)');

async function userCommit(username)
{
    try
    {
        let response = await fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${keys.gitHub}`}});
        let data = await response.json();
        return(data);
    }
    catch(error)
    {
        return(error);
    }
}

    let user = await userCommit(username);
    const date = new Date(user[0].created_at)

    console.log(user); //EVERYTHING
    console.log(`Last commit was made on: ${date}`); //USERNAME
    console.log(`Username: ${user[0].actor.login}`); //TIME


})();

//
// ////// USING '.then' ////////////////////////
// function commitsArray(username)
// {
//     return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${keys.gitHub}`}}).then(response => response.json()).then(data => console.log(data[0].created_at)).catch(error => console.log(error))
// }
//
// commitsArray('lexibor');








