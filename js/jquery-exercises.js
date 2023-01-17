$(function(){
    "use strict";

    // $(function() {
    //     alert( 'The DOM has finished loading!' );
    // });

    // alert($('#welcome').html());

    // $('.codeup').css({
    //     border: '1px solid red'
    // });

    // $('li').css('font-size', '20px');

    // $('h1, p, li').css('background-color', 'yellow');

    // alert($('h1').html());

    $('h1').on('click', function()
    {
        $(this).css('background-color', 'purple')
    })

    $('p').on('dblclick', function()
    {
        $(this).css('font-size', '18px')
    })

    $('li').hover(
        function()
        {
            $(this).css('color', 'red')
        },
        function()
        {
            $(this).css('color', '')
        }
    )




})