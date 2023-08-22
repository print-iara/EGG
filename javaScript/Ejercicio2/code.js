/** @format */
// Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
// para calcular el área y el perímetro se utilizan las siguientes fórmulas
let valor = prompt("ingresa el radio!");

document.getElementById("area").textContent =
	"El area del circulo es " + Math.PI * (valor * valor);
document.getElementById("perimetro").textContent =
	"El perímetro del circulo es " + Math.PI * 2 * valor;

//segunda función con listener

let boton = document.getElementById("boton");

boton.addEventListener("click", (e) => {
	let valor = document.querySelector("input").value;
	document.getElementById("area2").textContent =
		"El area del circulo es " + Math.PI * (valor * valor);
	document.getElementById("perimetro2").textContent =
		"El perímetro del circulo es " + Math.PI * 2 * valor;
	document.querySelector("input").value = "";
});
