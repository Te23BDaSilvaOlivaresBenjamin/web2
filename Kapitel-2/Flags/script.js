let divbox = document.querySelector('.grid-6');
let knapp1 = document.querySelector('#btn-one');
knapp1.addEventListener('click', function () {
    console.log('klicka på knappen');
    fetch('http://10.151.168.5:8081/flags/random')
    .then(svar => {
        console.log(svar);
        return svar.json()
    })
    .then(data=>{
        console.log(data.name, data.code, data.svgUrl);
        let urlBilden = 'http://10.151.168.5:8081' + data.svgUrl;
        console.log(urlBilden);
        divbox.insertAdjacentHTML("afterbegin", 
            '<img src = " ' + urlBilden + '" alt="' + data.name + '">'
        )
    })
});