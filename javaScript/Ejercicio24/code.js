/** @format */

// Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
// circulo y lo muestre en el HTML

let boton = document.querySelector("button");

boton.addEventListener("click", (e) => {
	e.preventDefault();
	let valor = document.getElementById("diametro").value;
	console.log(valor);
	document.getElementById("radio").textContent = "El radio es: " + valor / 2;
	document.getElementById("diametro").value = "";
});
