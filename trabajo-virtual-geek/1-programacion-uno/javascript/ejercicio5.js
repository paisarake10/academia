'use strict';

let obj = document.querySelector('h3');
let valor = document.querySelector('h3').innerHTML;

const re = /Geek2020/;

let newWord = valor.replace(re,'**'); 

obj.innerHTML = newWord;