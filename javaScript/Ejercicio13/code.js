/**
 * Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
 * 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.
 *
 * @format
 */

const persona1 = {
	nombre: "juan",
	edad: 36,
	sexo: "H",
	peso: 82,
	altura: 1.79,
};
const persona2 = {
	nombre: "Lucia",
	edad: 39,
	sexo: "M",
	peso: 75,
	altura: 1.82,
};

document.getElementById(
	"resultado"
).textContent = `Nombre: ${persona1.nombre}  Edad: ${persona1.edad}  Sexo: ${persona1.sexo} Peso: ${persona1.peso} Altura: ${persona1.altura}`;
