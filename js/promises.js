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
        return(error)
    }
}

    let user = await userCommit(username);

    console.log(user);
    console.log(`Last commit was made on: ${user[0].created_at}`);
    console.log(`Username: ${user[0].actor.login}`);


})();



