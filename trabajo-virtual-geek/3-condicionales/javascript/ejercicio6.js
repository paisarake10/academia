'use strict';
const div = document.querySelector('div');

(div.classList.contains('warning')) ? (div.innerHTML = "Tenga cuidado", 
	div.title = "AVISO"):
(div.classList.contains('success')) ? (div.innerHTML = "Los datos son correctos",
 div.title = "CORRECTO"):
(div.classList.contains('error'))   ? (div.innerHTML = "Ha surgido un error",
 div.title = "ERROR"):"";


