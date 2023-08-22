/** @format */
//Escribir una función que reciba un String y devuelva la palabra más larga 


let frase = prompt("ingresa una frase");
function palabraMasLarga(cadena) {
	const palabras = cadena.split(" ");
	const maxima = palabras.reduce((l, w) => Math.max(l, w.length), 0);
	const resultado = palabras.filter((t) => t.length == maxima);
	return [resultado];
}

document.getElementById("resultado").textContent = palabraMasLarga(frase);

//return [...new Set(palabras.filter((t) => t.length == maxima))];
