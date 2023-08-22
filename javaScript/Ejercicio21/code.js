/** @format */

// Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.

class Persona {
	nombre;
	edad;
	sexo;
	peso;
	altura;
}

let usuario = new Persona();
usuario.nombre = "juan";
usuario.edad = 33;
usuario.sexo = "H";
usuario.peso = 85;
usuario.altura = 178;

let vector = Object.values(usuario);
let vectorx = vector.join(" - ");

document.getElementById("resultado").textContent = vectorx;
