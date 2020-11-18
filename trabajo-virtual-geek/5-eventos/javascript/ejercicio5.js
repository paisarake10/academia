"use strict";

const liIsra = document.querySelector('.teacher--isra');
const liTuerto = document.querySelector('.teacher--tuerto');
const liNasi = document.querySelector('.teacher--nasi');
// se podria utilizar una estructura condicional if para agregar o remover
// pero toggle lo hace por si solo
function quitarAgregar(evento)
{
	const itemSelected = evento.currentTarget;
	const favorite = itemSelected.querySelector('.favorite');
	itemSelected.classList.toggle('teacher--selected');
	if (favorite.innerHTML == "Añadir") {
		favorite.classList.toggle(favorite.innerHTML = "Quitar");
	} else {
		favorite.classList.toggle(favorite.innerHTML = "Añadir");
	}
}

liIsra.addEventListener('click', quitarAgregar);
liTuerto.addEventListener('click', quitarAgregar);
liNasi.addEventListener('click', quitarAgregar);