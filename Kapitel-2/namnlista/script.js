var rutainput = document.querySelector('input');
var knappen = document.querySelector('button');
var listan = document.querySelector('.namnlista');

knappen.addEventListener('click', function (){
    var namn = rutainput.value;

    var html = '<li>' + namn + '<li>';
    console.log(html);
    listan.insertAdjacentHTML('afterbegin', html);

    const li = document.createElement('li');
    li.textContent = namn;
    listan.appendChild(li);
    rutaMeddelande.textContent = "La till" + namn;
    rutainput.textContent = "";
});