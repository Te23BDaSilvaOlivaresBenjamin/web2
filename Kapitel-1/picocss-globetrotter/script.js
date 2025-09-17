// Välja vad vi skall lyssna på
// Välja knappen-elementet
let knapp = document.querySelector('button');

// Välja HTML-elementet
let minHtml = document.documentElement;

// Välja kontainern
let kontainer = document.querySelector('.container');

// Välj rubriken
let rubrik = document.querySelector('h1');

// Lyssna på 'click' på knappen
knapp.addEventListener('click', function () {
    console.log("Du klickade på knappen!");

    // Om temat "light" så blir den "dark"
    if (minHtml.dataset.theme == "light") {
        minHtml.dataset.theme = "dark";
        kontainer.style.backgroundColor = "darkblue";
        rubrik.style.color = "red";
        rubrik.style.fontSize = "50px";
        rubrik.style.fontFamily = "sans-serif";
    } else {
        minHtml.dataset.theme = "light";
        kontainer.style.backgroundColor = "blue";
        rubrik.style.color = "red";
        rubrik.style.fontSize = "30px";
        rubrik.style.fontFamily = "serif";
    }
});

let fknapp = document.querySelector('input[type="submit"]');

let fnamn = document.querySelector('input');

let fmail = document.querySelector('input[type="email"]');

let fmeddelande  = document.querySelector('textarea');

fknapp.addEventListener("click", function (e){
    e.preventDefault();
    let ftext = fnamn.value + "din mejladress är " + fmail.value + "och ditt meddelande är "+ fmeddelande.value;

    fmeddelande.value = "Tack för Meddelandet! ";

    console.log(ftext);

})