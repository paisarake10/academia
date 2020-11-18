'use strict';

const boton = document.querySelector('button');
const input = document.querySelector('input');

boton.addEventListener('click', () => console.log(`Hola , ${input.value}`));
