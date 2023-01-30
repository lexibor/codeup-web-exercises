(async () => {
    "use strict";


        try
        {
            let response = await fetch('https://api.github.com/users/lexibor/events', {headers: {'Authorization': `token ${keys.gitHub}`}});
            let data = await response.json();
            console.log(data[0].created_at);
        }
        catch(error)
        {
            console.log(error)
        }

})();



