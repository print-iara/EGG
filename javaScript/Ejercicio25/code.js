/** @format */
// Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
// siguiente formulario.
let formulario = document.getElementById("form1");


function getFormValores() {
	event.preventDefault();
	let nombre = document.getElementsByName("nombre")[0].value;
	//console.log(nombre);
	let apellido = document.getElementsByName("apellido")[0].value;
	//console.log(apellido);
	let p = document.createElement("p");
	formulario.appendChild(
		p
	).innerHTML = `<span class="text-warning">${nombre} ${apellido}</span>`;
	document.getElementsByName("nombre")[0].value = "";
	document.getElementsByName("apellido")[0].value = "";
}
