$(function(){
    "use strict";
    //38 == up, 40 == down, 37 == left, 39 == right, 66 == b, 65 == a, 13 == enter

    // array sequence [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
    let konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    let sequence = [];

    $('.waviy').hide();
    $('.reset').hide();
    $('.sad-face').hide();

    $(document).keydown(function(event){
        console.log(event.keyCode);
        sequence.push(event.keyCode);

        $('.waviy').show();
        $('.reset').hide();
        $('body').css('background-color', '');
        $('.sad-face').hide();

        for(let i = 0; i < sequence.length; i++)
        {
            if(sequence[i] !== konami[i])
            {
                sequence = [];
               $('.waviy').hide();
               $('.reset').show();
               $('.sad-face').show();

               // $('body').css('background-color', 'red');

            }

        }

        if(sequence.join('') === konami.join(''))
        {
            console.log('correct');
            $('.waviy').hide();
        }
        else
        {
            console.log('checking....');

        }

    });
})