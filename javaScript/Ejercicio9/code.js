/** @format */
// Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
// espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
// funcionamiento de la función Substring()
let entrada = document.getElementById("entrada");

entrada.addEventListener("change", (e) => {
	let frase = entrada.value;
	let fraseAux = "";
	for (let i = 0; i < frase.length; i++) {
		fraseAux += frase.substring(i, i + 1) + " ";
	}
	document.getElementById("respuesta").textContent =
		"Frase con espacios: " + fraseAux;
	entrada.value = "";
});
