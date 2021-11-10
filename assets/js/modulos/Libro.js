


// Clase Libro con su constructor -------------------------------------------------------------------------

class Libro {
    constructor(id, autor, titulo, año, editorial, stock, precio, src) {
        this.id = id
        this.autor = autor
        this.titulo = titulo
        this.año = año
        this.editorial = editorial
        this.stock = stock
        this.precio = precio
        this.src = src
    }

    getStock() {
        if (this.stock > 0) {
            return true;
        } else {
            return false;
        }
    }
}
