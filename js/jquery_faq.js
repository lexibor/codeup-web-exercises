$(function(){

    "use strict";

$('dt').on('click', function ()
{
    $(this).nextAll('dd:first').toggleClass('invisible');

    $(this).toggleClass('highlight');
})

    $('#highlight').on('click', function()
    {
        $('#fun-facts')
            .children()
            .children()
            .next()
            .each(function(i, el)
            {
                $(el).children().last().toggleClass('highlight');
            })
    })

    $('h3').on('click', function()
    {
        $(this).nextAll('ul:first').toggleClass('bold-text')
    })

    $('li').on('click', function()
    {
        $(this).parent().children().first().toggleClass('blue-text');
    })


    $('btn-1').on('click', function()
    {

    })

    $('btn-2').on('click', function()
    {

    })

    $('btn-3').on('click', function()
    {

    })



})