let thxcard = document.getElementById('thxcard');
let maincard = document.getElementById('maincard');
let submitbutton = document.getElementById('submit');
let userrating = document.querySelectorAll('.rating');

let chosenrating = document.getElementById('chosenrating');

userrating.forEach((urating) => {
    urating.addEventListener('click', () => {
            chosenrating.innerHTML = urating.innerHTML;
        })
})

submitbutton.addEventListener('click', function () {
    maincard.style.display = 'none';
    thxcard.style.display = 'block';

});

thxcard.addEventListener('click', function () {
    maincard.style.display = 'block';
    thxcard.style.display ='none';

});

