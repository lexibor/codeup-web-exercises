$(function(){
    "use strict";

    resetAll();

    //38 == up, 40 == down, 37 == left, 39 == right, 66 == b, 65 == a, 13 == enter, 27 == esc

    // array sequence [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
    let konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    let sequence = [];


function resetAll()
{
    $('.waviy').hide();
    $('.reset').hide();
    $('.big-fuzz').hide();
    $('.victory').hide();
    $('.success').hide();

    $('audio#lost')[0].pause();
    $('audio#won')[0].pause();

}

    $(document).keydown(function(event){
        console.log(event.keyCode);
        sequence.push(event.keyCode);

        $('.waviy').show();
        $('.reset').hide();
        $('.big-fuzz').hide();
        $('.victory').hide();
        $('.success').hide();

        for(let i = 0; i < sequence.length; i++)
        {
            if(sequence[i] !== konami[i])
            {
                sequence = [];
               $('.waviy').hide();
               $('.reset').show();
               $('.big-fuzz').show();

               // $('body').css('background-color', 'red');

                $('audio#lost')[0].play();


                if(event.keyCode == 91)
                {
                    $('audio#lost')[0].pause();
                }

            }

        }

        if(sequence.join('') === konami.join(''))
        {
            console.log('correct');
            $('.waviy').hide();
            $('.success').show();
            $('.victory').show();

            $('audio#won')[0].play();

        }
        else
        {
            console.log('checking....');

        }

        if(event.keyCode === 27)
        {
            resetAll();
        }

    });
})