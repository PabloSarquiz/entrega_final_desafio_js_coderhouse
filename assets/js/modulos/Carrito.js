class Carrito {
    constructor(name = "Usuario", items = [], total= 0) {
        this.name = name,
            this.items = items,
            this.total = total
    }

    getIndex(libro) {
        let index = this.items.indexOf(libro)
        return index
    }

    addLibro(libro) {


        if (libro.getStock()) {
            if (!this.items.some(e => e.titulo === libro.titulo)) {

                let libroCarrito = Object.assign({}, libro)
                libroCarrito.cantidad = 1;
                libroCarrito.stock--
                this.items.push(libroCarrito)

                agregarDOM(libroCarrito)

            } else if (this.items.some(e => e.titulo === libro.titulo)) {
                return


            }



        } else {
            alert("No quedan más copias de " + libro.titulo);

        }

        actualizar()

    }

    removeLibro(libro) {
        this.items.splice(this.getIndex(libro), 1);
        actualizar();
    }



    precioTotal() {

        let totalCarrito = 0;

        this.items.forEach(libroCarrito => {

            totalCarrito += libroCarrito.precio * libroCarrito.cantidad;


        });
        this.total = totalCarrito

        return totalCarrito
    }

    clearCarrito() {
        this.items = []

        contenedor.innerHTML = ""

        actualizar()
        return this.items

    }

    buyLibros() {
        alert("Gracias por su compra")
        this.items = []

    }



}