(async () =>
{
    "use strict";


        async function getUsername()
        {
            try
            {
                let response = await fetch('./data/profiles.json');
                let data = response.json();
                return(data);
            }
            catch(error)
            {
                console.log(error);
            }
        }

        let username = await getUsername();

    console.log(username);


    $('#button').on('click', async function(event)
    {
        event.preventDefault();

        let colorName = $('#username').val();
        //
        // console.log(username.colorName);


        console.log(username[colorName]);

        $('body').css('background', username[colorName]);

        $('#username').val('');

    })

})();