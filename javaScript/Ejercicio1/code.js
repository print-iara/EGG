/** @format */

// Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
// hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
// indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario

/*con eventListener*/
const parrafo = document.getElementById("mensaje");
const ingreso = document.querySelector("input");
//cuando cambia el estado el input carga el texto(pararse fuera del input)
ingreso.addEventListener("change", (e) => {
	parrafo.textContent = "El dia de hoy esta: " + e.target.value;
	ingreso.value = "";
});
