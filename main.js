// Esta es la clase constructora del carrito

class Carrito {
    constructor(name, items, total) {
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


// Esta funcion, selecciona primero el elemento padre de el boton que 
// ejecuta el evento, una vez dentro del elemento padre, busca dentro
// del mismo el titulo, el precio y la imagen y lo asigna a una variable.
// Esta funcion se ejecuta dentro del eventListener de los botones
// addToCart.

function addToCartClicked(event){
    let boton = event.target
    let productoCarrito = boton.parentElement
    let titulo = productoCarrito.getElementsByClassName("titulo")[0].innerText
    let precio = productoCarrito.getElementsByClassName("precio")[0].innerText
    let imagenSrc = productoCarrito.getElementsByClassName("imagen")[0].src
    console.log(titulo, precio, imagenSrc);

}

// Esta funcion itera por cada producto dentro del carrito. 
// selecciona el precio de cada libro y lo multiplica por la cantidad
// suma todos los valores y actualiza el Total.

function actualizarTotalCarrito(){
    let contenedorProductoCarrito = document.getElementsByClassName("carrito")[0];
    let productosCarrito = contenedorProductoCarrito.getElementsByClassName("producto-carrito")
    let total = 0

    for ( let i = 0 ; i < productosCarrito.length ; i++) {
        let productoCarrito = productosCarrito[i];
        let precioLibro = productoCarrito.getElementsByClassName("precio")[0]
        let cantidadLibro = productoCarrito.getElementsByClassName("cantidad")[0]
        let precio = parseFloat(precioLibro.innerText.replace('$', ''));
        let cantidad = cantidadLibro.value
        total += (precio * cantidad)

    }

    document.getElementsByClassName("total")[0].innerText = `TOTAL: $${total}`;
}




// Seleccionar todos los botones Add to cart y agregar eventListener.

let botonesAddToCart = document.getElementsByClassName("btn-primary");

for (let i = 0; i < botonesAddToCart.length; i++) {
    let boton = botonesAddToCart[i]
    boton.addEventListener('click', addToCartClicked) 
        
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
        actualizarTotalCarrito();
    })
};

// selecionar Boton Clear y agregar event listener 

let botonClear = document.getElementById("clear");

botonClear.addEventListener('click', () => {
   
    botonClear.parentElement.parentElement.remove();

});




actualizarTotalCarrito();

