/** @format */
// Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
// 	amarillo
let parrafo = document.getElementById("parrafo");
console.log(parrafo);

let padre = parrafo.parentNode;
padre.removeChild(parrafo);

let palabras = parrafo.firstChild.data.split(" ");
let frase = [];
palabras.forEach((palabra) => {
	if (palabra.length == 8) {
		let aux = "<span class='resaltar'>" + palabra + "</span>";
		frase.push(aux);
	} else {
		frase.push(palabra);
	}
});
frase = frase.join();

document.getElementById("resultado").innerHTML = frase;
