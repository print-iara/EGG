/**
 * Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
 * con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
 * radio del círculo lo proporcionará el usuario.
 *
 * @format
 */

class Circulo {
	radio;
	calcularArea() {
		return Math.PI * (this.radio * this.radio);
	}
	calcularPerimetro() {
		return 2 * Math.PI * this.radio;
	}
}

const c1 = new Circulo();
c1.radio = prompt("ingresa el radio del circulo");
console.log(c1.radio);
document.getElementById("area").textContent =
	"El área del circulo es: " + c1.calcularArea();
document.getElementById("perimetro").textContent =
	"El perímetro del circulo es: " + c1.calcularPerimetro();
