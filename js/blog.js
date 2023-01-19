$(function()
{
    "use strict";

    $.get('./data/blog.json').done(function(data)
    {
        let html = '';
        $('#posts').html('');
        for(let i = 0; i < data.length; i++)
        {
            html += `<h3>${data[i].title}</h3>
                      <p>${data[i].content}</p>
                       <p class="date">${data[i].date}</p>
                        <p class="categories">${data[i].categories}</p>`
        }

        $('#posts').html(html);

    })

});