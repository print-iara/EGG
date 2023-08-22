/** @format */

// Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
// elección.

let boton = document.getElementById("boton1");

const clickear = (e) => {
	let nuevo_parrafo = document
		.createElement("p")
		.appendChild(
			document.createTextNode("Mensaje: Hiciste click en el botón!!")
		);

	document.getElementById("resultado").appendChild(nuevo_parrafo);
};

let boton1 = document.getElementById("boton2");
boton1.addEventListener(
	"click",
	(e) => {
		let parrafo = document.createElement("div");
		parrafo.appendChild(
			document.createTextNode("Mensaje: Hiciste click en el botón!!")
		);
		parrafo.style.cssText =
			"border:8px solid #56aaf3;padding:12px;width:250px;margin:12px 0 12px 0;";

		document.getElementById("resultado2").appendChild(parrafo);
	},
	false
);
