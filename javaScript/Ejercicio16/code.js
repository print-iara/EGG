/** @format */

// Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla.

const numeros1 = [];
const numeros2 = [];

for (let i = 0; i < 5; i++) {
	numeros1.push(Math.round(Math.random() * 10));
	numeros2.push(Math.round(Math.random() * 10));
}

document.getElementById("numeros1").textContent = numeros1;
document.getElementById("numeros2").textContent = numeros2;
