"use strict";

let userrating = document.querySelectorAll('.rating');
let button = document.getElementById('submit');
let thxcard = document.getElementsByClassName('two');
let maincard = document.getElementsByClassName('one');
let chosenrating = document.getElementsByTagName('span');
let urating;

userrating.addEventListener('click', function() {
    chosenrating.innerHTML = userrating.innerHTML;
})

button.addEventListener('click', function () {
        maincard[0].style.display = 'none;';
        thxcard[0].style.display = 'block';

    });

