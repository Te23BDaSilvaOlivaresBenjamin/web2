var Plusknapp = document.querySelector('.plus');
var Minusknapp = document.querySelector('.minus');
var rutaAntal = document.querySelector('.antal');
var rutaSumma = document.querySelector('.summa');
var rutaPris = document.querySelector('.pris');
var rutaTotal = document.querySelector(' .total');
rutaAntal.value = 0;
rutaSumma.textContent = 0;
rutaPris.textContent = 100000;
Plusknapp.addEventListener('click', function () {
    rutaAntal.value = Number(rutaAntal.value) + 1;
    rutaSumma.textContent = Number(rutaPris.textContent * rutaAntal.value);
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