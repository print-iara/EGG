/**
 * Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
 * Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
 * y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
 * numero de páginas.
 *
 * @format
 */

class libro {
	isbn;
	titulo;
	autor;
	paginas;
	crearLibro() {
		this.isbn = prompt("ingresa isbn");
		this.titulo = prompt("ingresa titulo");
		this.autor = prompt("ingresa autor");
		this.paginas = prompt("ingresa paginas");
	}

	mostrar() {
		return `Información del Libro: ISBN: ${this.isbn} Titulo: ${this.titulo} Autor: ${this.autor} Página ${this.paginas}`;
	}
}

let libro1 = new libro();
libro1.crearLibro();
libro1.mostrar();
document.getElementById("resultado").textContent = libro1.mostrar();
