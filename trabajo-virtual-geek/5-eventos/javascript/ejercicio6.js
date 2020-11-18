'use strict';
const fondo = document.querySelector('.fondo');

document.addEventListener('keydown', () => {
	if (event.key === 'r') {
		fondo.classList.toggle('rojo');
	} else if(event.key === 'm'){	
		fondo.classList.toggle('morado');
	}
	});