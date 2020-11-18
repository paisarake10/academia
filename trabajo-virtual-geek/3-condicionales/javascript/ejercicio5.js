'use strict';
const div = document.querySelector('div');

if (div.classList.contains('warning')) 
	{
		div.innerHTML = "Tenga cuidado";
		div.title = "AVISO";
	} else if(div.classList.contains('success')){
		div.innerHTML = "Los datos son correctos";
		div.title = "CORRECTO";
	}else if(div.classList.contains('error')){
		div.innerHTML = "Ha surgido un error";
		div.title = "ERROR";
	}