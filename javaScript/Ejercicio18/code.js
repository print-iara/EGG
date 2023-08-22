/** @format */

// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos

var valores = [true, 5, false, "hola", "adios", 2];

const evaluar = (lista) => {
	const palabras = lista.filter((t) => typeof t === "string");
	const valor = palabras.reduce((l, w) => Math.max(l, w.length), 0);
	const maxima = palabras.filter((t) => t.length == valor);
	const numeros = lista.filter((t) => typeof t === "number");
	const resultados = [
		numeros[0] + numeros[1],
		numeros[0] - numeros[1],
		numeros[0] * numeros[1],
		numeros[0] / numeros[1],
		numeros[0] % numeros[1],
	];
	const booleanos = lista.filter((t) => typeof t === "boolean");
	let a = booleanos[0] === (2 === 1) ? false : true;
	let b = booleanos[1] === (2 === 2) ? true : false;

	return `El string mas largo es ${maxima}, el resultado de las operaciones de los números es ${[
		...resultados,
	]} Los boleanos son ${a} y ${b}`;
};
document.getElementById("resultado").textContent = evaluar(valores);
