/** @format */

// Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.

let ingreso = document.querySelector("input");

ingreso.addEventListener("change", (e) => {
	let letra = e.target.value.toUpperCase();
	console.log(letra);

	document.getElementById("resultado").textContent =
		letra == "S" || letra == "N" ? "CORRECTO" : "INCORRECTO";
	ingreso.value = "";
});
