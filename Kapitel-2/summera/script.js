var rutaP = document.querySelector('p');
var rutaLi = document.querySelector('li');
var summa = 0;

rutaLi.forEach(function (li) {
    console.log(li.textContent);
    summa += Number(li.textContent);
});

rutaP.textContent = summa;