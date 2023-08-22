/** @format */
// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
// solicite números al usuario hasta que la suma de los números introducidos supere el
// límite inicial.

let limite = parseInt(prompt("ingresa el valor limite"));

let acumulador = 0;

do {
	let numero = parseInt(prompt("ingresa un número"));
	acumulador += numero;
	console.log(acumulador);
} while (limite > acumulador);

document.getElementById(
	"mensaje"
).textContent = `Superaste el valor limite: ${limite} `;
