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

    let images = $('#images');

    $('#btn-1').on('click', function()
    {

        images
            .children()
            .first()
            .detach()
            .insertAfter(images.children().first());

    })

    $('#btn-2').on('click', function()
    {
        let random = Math.floor(Math.random() * 100);;

        if(random % 2 === 0)
        {
            images
                .children()
                .first()
                .detach()
                .insertAfter(images.children().first());
        }
        else
        {
            images
                .children()
                .last()
                .detach()
                .insertBefore(images.children().last());
        }
    })

    $('#btn-3').on('click', function()
    {
        images
            .children()
            .last()
            .detach()
            .insertBefore(images.children().last());

    })



})