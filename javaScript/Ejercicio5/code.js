/** @format */
// Construir un programa que simule un menú de opciones para realizar las cuatro
// operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
// numéricos enteros. El usuario, además, debe especificar la operación con el primer
// carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.

let boton = document.getElementById("boton");

boton.addEventListener("click", (e) => {
	e.preventDefault();
	let num1 = parseInt(document.getElementById("numero1").value);
	let num2 = parseInt(document.getElementById("numero2").value);
	let operador = document.getElementById("operador").value.toUpperCase();
	let valor = 0;
	valor = calcular(num1, num2, operador);

	document.getElementById("resultado").textContent = valor;
	document.getElementById("numero1").value = "";
	document.getElementById("numero2").value = "";
});

//funciona calcular

const calcular = (num1, num2, op) => {
	switch (op) {
		case "S":
			return "El resultado es: " + (num1 + num2);
		case "R":
			return "El resultado es: " + (num1 - num2);
		case "M":
			return "El resultado es: " + num1 * num2;
		case "D":
			return num2 == 0
				? (document.getElementById("resultado").textContent =
						"No se puede dividir por 0")
				: "El resultado es: " + num1 / num2;
		default:
			return "No es un operador valido";
	}
};
