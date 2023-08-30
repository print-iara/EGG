/** @format */

// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
// muestre el siguiente array [6, 9, 12, 15, 18].

let matriz = [[3], [6], [9], [12], [15]];

const modificar = (vector) => {
	let aux = vector.shift();
	let num = vector[vector.length - 1] + aux;
	vector.push(parseInt(vector[vector.length - 1]) + parseInt(aux));

	return vector.join("-");
};

document.getElementById("resultado").textContent = modificar(matriz);
