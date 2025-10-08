var rutainput = document.querySelector('input');
var knappen = document.querySelector('button');
var listan = document.querySelector('.namnlista');

knappen.addEventListener('click', function () {
    rutainput.value = d
    knappen.value
})

Minusknapp.addEventListener ('click', function  (){
    if (rutaAntal.value > 0){
        rutaAntal.value -= 1;
        rutaSumma.textContent = (rutaAntal.value * rutaPris.textContent);
    }
})

var rutaPrisalla = document.querySelectorAll('.pris');
var totalen = 0

rutaPrisalla.forEach(function (prisruta)    {

    totalen += Number(prisruta.textContent);

    console.log(prisruta.textContent, totalen);
})
rutaTotal.textContent = totalen;