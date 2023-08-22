/** @format */
// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”
let numero = 20;

let entrada = document.getElementById("entrada");
let mensaje;

entrada.addEventListener("change", (e) => {
	let numero = entrada.value;

	mensaje = numero % 2 == 0 ? `${numero} es par` : `${numero} es impar`;
	document.getElementById("resultado").textContent = mensaje;
	entrada.value = "";
});
