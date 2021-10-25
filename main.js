// Esta es la clase constructora del carrito

class Carrito {
    constructor(name = "Usuario", items = [], total = 0) {
        this.name = name,
            this.items = items,
            this.total = total
    }

    addLibro(libro) {
        if (libro.getStock() === true) {

        }
    }


}

// Esta es la clase constructoria de los libros
class Libro {
    constructor(id, autor, titulo, año, editorial, stock, precio) {
        this.id = id
        this.autor = autor,
        this.titulo = titulo,
        this.año = año,
        this.editorial = editorial,
        this.stock = stock
        this.precio = precio
    }

    getStock() {
        if (this.stock > 0) {
            this.stock--;
            return true;
        } else {
            return false;
        }
    }
}


let baseDatos = [];

baseDatos.push(new Libro(1, "KING", "CARRIE", 1974, "DEBOLSILLO", 4, 899));
baseDatos.push(new Libro(2, "KING", "CUJO", 1976, "DEBOLSILLO", 9, 999));
baseDatos.push(new Libro(3, "KING", "SALEM'S LOT", 1988, "DEBOLSILLO", 8, 899));
baseDatos.push(new Libro(4, "KING", "IT", 1986, "DEBOLSILLO", 10, 1199));
baseDatos.push(new Libro(5, "KING", "CEMENTERIO DE ANIMALES", 1999, "SALAMANDRA", 5, 899));
baseDatos.push(new Libro(6, "KING", "THE STAND", 1974, "SALAMANDRA", 3, 999));
baseDatos.push(new Libro(7, "KING", "EL RESPLANDOR", 1984, "DEBOLSILLO", 0, 999));
baseDatos.push(new Libro(8, "KING", "MISERY", 1984, "DEBOLSILLO", 3, 999));

console.log(baseDatos);

console.log(baseDatos[0].getStock());
console.log(baseDatos[6].getStock());

console.log(baseDatos);

console.log(Object.keys(baseDatos[0]));

console.log(Object.getOwnPropertyNames(baseDatos[1]));





// Seleccionar todos los botones Add to cart y agregar eventListener.

let botonesAddToCart = document.getElementsByClassName("btn-primary");

for (let i = 0; i < botonesAddToCart.length; i++) {
    let boton = botonesAddToCart[i]
    boton.addEventListener('click', () => {
        console.log("funciona")
    }
        
    )
};








// ------------------------------------------------------------------------------

// seleccionr boton comprar y agregar eventListener

let botonComprar = document.getElementById("buy");

botonComprar.addEventListener('click', function () {
    console.log("Compra");
});

//------------------------------------------------------------------------------

// seleccionar boton delete y agregar event listener

let botonesDelete = document.getElementsByClassName("delete");
for (let i = 0; i < botonesDelete.length; i++) {
    let botonDelete = botonesDelete[i]
    botonDelete.addEventListener('click', function (event) {
        let botonDeleteApretado = event.target
        botonDeleteApretado.parentElement.remove()
    })
};

// selecionar Boton Clear y agregar event listener 

let botonClear = document.getElementById("clear");

botonClear.addEventListener('click', () => {
   
    botonClear.parentElement.parentElement.remove();

});






