// Esta es la clase constructoria de los libros
class Libro {
    constructor(autor, titulo, año, editorial, stock, precio) {
        this.autor = autor,
            this.titulo = titulo,
            this.año = año,
            this.editorial = editorial,
            this.stock = stock
        this.precio = precio
    }
}

let libroUno = new Libro("KING", "CARRIE", 1974, "DEBOLSILLO", 4, 899);
let libroDos = new Libro("KING", "CUJO", 1976, "DEBOLSILLO", 9, 999);
let libroTres = new Libro("KING", "SALEM'S LOT", 1988, "DEBOLSILLO", 8, 899);
let libroCuatro = new Libro("KING", "IT", 1986, "DEBOLSILLO", 10, 1199);
let libroCinco = new Libro("KING", "CEMENTERIO DE ANIMALES", 1999, "SALAMANDRA", 5, 899);
let libroSeis = new Libro("KING", "THE STAND", 1974, "SALAMANDRA", 3, 999);
let libroSiete = new Libro("KING", "EL RESPLANDOR", 1984, "DEBOLSILLO", 0, 999);
let libroOcho = new Libro("KING", "MISERY", 1984, "DEBOLSILLO", 3, 999);


let biblioteca = [];

biblioteca.push(libroUno, libroDos, libroTres, libroCuatro, libroCinco, libroSeis, libroSiete);

let carrito = [];
let total = 0;


function main() {
    alert("Bienvenido a nuestra tienda virtual! A continuacion sellecione el numero del libro que desea comprar")
    let opcion = mostrarProductos();

    while (opcion != 0) {
        switch (opcion) {
            case 1:
                if (biblioteca[opcion - 1].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    opcion = mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[opcion - 1].titulo} al carrito`);
                    biblioteca[opcion - 1].stock--
                    agregarLibro(biblioteca[opcion - 1]);

                }
                break

            case 2:
                if (biblioteca[opcion - 1].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[opcion - 1].titulo} al carrito`);
                    biblioteca[opcion - 1].stock--
                    agregarLibro(biblioteca[opcion - 1]);

                }
                break

            case 3:
                if (biblioteca[opcion - 1].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[opcion - 1].titulo} al carrito`);
                    biblioteca[opcion - 1].stock--
                    agregarLibro(biblioteca[opcion - 1]);

                }
                break
            case 4:
                if (biblioteca[opcion - 1].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[opcion - 1].titulo} al carrito`);
                    biblioteca[opcion - 1].stock--
                    agregarLibro(biblioteca[opcion - 1]);

                }
                break

            case 5:
                if (biblioteca[opcion - 1].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[opcion - 1].titulo} al carrito`);
                    biblioteca[opcion - 1].stock--
                    agregarLibro(biblioteca[opcion - 1]);

                }
                break

            case 6:
                if (biblioteca[opcion - 1].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[opcion - 1].titulo} al carrito`);
                    biblioteca[opcion - 1].stock--
                    agregarLibro(biblioteca[opcion - 1]);

                }
                break
            case 7:
                if (biblioteca[opcion - 1].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[opcion - 1].titulo} al carrito`);
                    biblioteca[opcion - 1].stock--
                    agregarLibro(biblioteca[opcion - 1]);

                }
                break

            default:
                alert("Ingresaste una opcion invalida");

        };

        opcion = mostrarProductos();
    };

    alert("Muchas gracias por su interes en nuestros libros, a continuacion aprete F12 para ver sus productos seleccionados")
    console.log("Estos son los productos en su carrito!")
    console.table(carrito);
    totalCarrito()
    console.log(`La suma total de su carrito es ${total}`)
};


// Esta funcion agrega el libro al carrito

function agregarLibro(libro) {
    carrito.push(libro)
}

// Esta funcion muestra los libros disponibles

function mostrarProductos() {
    let opcion = parseInt(prompt("Seleccione el libro, presiones 0 para salir\n\n 1-Carrie \n\n 2 Cujo \n\n 3-Salem's Lot\n\n 4-IT \n\n 5-Cementerio de Animales\n\n 6-The Stand\n\n 7-El resplandor \n\n 8-Missery"));
    return opcion;
};

// esta funcion calcula el precio total del carrito

function totalCarrito() {
    carrito.forEach(libro => {
        total += libro.precio;
    })
}

// esta funcion remueve todos los elementos del carrito y deja el total en 0

function limpiarCarrito() {
    total = 0
    return carrito = [];
}

// esta es la funcion principal que ejecuta el codigo.

main();







