/** @format */
/*Escribir una función flecha que reciba una palabra y la devuelva al revés */
let entrada = document.querySelector("input");
const invertir = () => {
	let cadena = entrada.value;
	let aux = cadena.split("").reverse().join("");
	return aux;
};

document.getElementById("entrada").addEventListener("change", (e) => {
	document.getElementById("respuesta").innerHTML =
		"Frase invertida: " + invertir();
	entrada.value = " ";
});
