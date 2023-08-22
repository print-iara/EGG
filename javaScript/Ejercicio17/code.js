/** @format */

// Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
// resultado

const frutas = [
	"Naranja",
	"Frutilla",
	"Pera",
	"Manzana",
	"Mango",
	"Banana",
	"Cereza",
];

const eliminador = (lista) => {
	lista.splice(lista.length - 2, 2);
	return lista;
};

document.getElementById("resultado").textContent = eliminador(frutas);
