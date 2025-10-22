var neyknapp = document.querySelector('.Neymarknapp');
var ronknapp = document.querySelector('.Ronaldinhomodal');
var peleknapp = document.querySelector('.Pelemodal');
var neymodal = document.querySelector('.neyney');
var stäng = document.querySelector('.stop');

neyknapp.addEventListener('click', function () {
    console.log('hey');

    neymodal.querySelector('article').innerHTML = `
            <h2>Neymar</h2>
            <p>
                Thank you for signing up for a membership!
                Please review the membership details below:
            </p>
            <ul>    
                <li>Membership: Individual</li>
                <li>Price: $10</li>
            </ul>
    `;

    neymodal.showModal();
})

ronknapp.addEventListener('click', function () {
    console.log('hey');
    neymodal.querySelector('article').innerHTML = `

            <h2>Ronaldinho</h2>
            <p>
                Thank you for signing up for a membership!
                Please review the membership details below:
            </p>
            <ul>
                <li>Membership: Individual</li>
                <li>Price: $10</li>
            </ul>
    `;
    
    neymodal.showModal();
})

peleknapp.addEventListener('click', function () {
    console.log('hey');
    neymodal.querySelector('article').innerHTML = `

            <h2>Pele</h2>
            <p>
                Thank you for signing up for a membership!
                Please review the membership details below:
            </p>
            <ul>
                <li>Membership: Individual</li>
                <li>Price: $10</li>
            </ul>
    `;
    
    neymodal.showModal();
})

stäng.addEventListener('click', function () {
    neymodal.close();
})