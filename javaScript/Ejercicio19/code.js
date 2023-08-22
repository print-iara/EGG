/** @format */

// Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
// de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
// programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
// Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
// ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
// 0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
// de 20.

let ar = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10));

ar.sort();

let b = ar.slice(0, 20);
b.fill(0.5, 10, 20);

document.getElementById("vector1").textContent = ar;
document.getElementById("vector2").textContent = b;
