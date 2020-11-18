'use strict';
const urlBool = false;
const url = urlBool && 'http://placehold.it/300x300';

let avatar = 'http://www.fillmurray.com/300/300';

const div = document.querySelector('.div');
div.innerHTML = `<img src="${url || avatar}"></img>`;