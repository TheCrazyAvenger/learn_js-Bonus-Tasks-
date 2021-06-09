'use strict';

const colorText = document.querySelector('.color');
const button = document.getElementById('change');

button.addEventListener('click', () => {
    let randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randColor;
    colorText.innerHTML = randColor;
    button.style.color = randColor;
})