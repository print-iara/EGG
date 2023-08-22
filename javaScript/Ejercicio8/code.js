/** @format */
/*Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.*/

let num = 0;
const numeros = new Array();

do {
	num = parseInt(prompt("ingresa un número"));
	while (isNaN(num)) {
		num = parseInt(prompt("solo puedes ingresar números"));
	}

	if (num != 0) {
		numeros.push(num);
	}
} while (num != 0);
let maximo = Math.max(...numeros);
document.getElementById("maximo").textContent = "El valor maximo es: " + maximo;
let minimo = Math.min(...numeros);
document.getElementById("minimo").textContent = "El valor mínimo es: " + minimo;

let suma = numeros.reduce((anterior, actual) => anterior + actual, 0);
let promedio = suma / numeros.length;
document.getElementById("promedio").textContent =
	"El promedio de los número es: " + promedio;
