'use strict';

const p = document.querySelector('p');

p.addEventListener('mouseover', () => p.innerHTML += p.innerHTML);
