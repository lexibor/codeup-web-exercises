$(function(){

    "use strict";

$('dt').on('click', function ()
{
    $(this).nextAll('dd:first').toggleClass('invisible');

    $(this).toggleClass('highlight');
})


})