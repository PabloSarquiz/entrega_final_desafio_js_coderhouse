
// -------------------- Selectores del DOM  ------------------------------------------------------------
let libros = document.querySelectorAll(".libro");
let botonesDelete = document.querySelectorAll(".delete");
let botonComprar = document.getElementById("buy");
let botonClear = document.getElementById("clear");
let total = document.getElementById('total');
let contenedor = document.getElementById('contenedor');
let cant = document.getElementsByClassName('cantidad');

// -------------------------------- Declaracion de CLASES.-----------------------------------------------
// Clase Carrito con su constructor.---------------------------------------------------------------------
class Carrito {
    constructor(name = "Usuario", items = [], total = 0) {
        this.name = name,
            this.items = items,
            this.total = total
    }

    addLibro(libro) {
        if (libro.getStock()) {
            if (this.items[libro.titulo] == undefined) {
                this.items[libro.titulo] = libro;
                this.items.push(libro)
                agregarDOM(libro)
            }
            this.items[libro.titulo].cantidad++;

        } else
            alert("No quedan más copias de " + libro.titulo);
        actualizar()
    }

    removeLibro(libro) {
        this.items[libro.titulo] = libro
        libro.cantidad = 0
        let index = this.items.indexOf(libro)
        this.items.splice(index, 1);
        actualizar();
    }



    precioTotal() {

        let totalCarrito = 0;

        this.items.forEach(libro => {

            totalCarrito += libro.precio * libro.cantidad;


        });
        this.total = totalCarrito

        return totalCarrito
    }



}



// Clase Libro con su constructor -------------------------------------------------------------------------
class Libro {
    constructor(id, autor, titulo, año, editorial, stock, precio, src, cantidad = 0) {
        this.id = id
        this.autor = autor,
            this.titulo = titulo,
            this.año = año,
            this.editorial = editorial,
            this.stock = stock
        this.precio = precio
        this.src = src
        this.cantidad = cantidad
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


// ---------------------------- Aca estoy simulando una base de datos. ------------------------------------------ 

let baseDatos = [];

if (sessionStorage.baseDatos == undefined) {

    baseDatos = []

    baseDatos.push(new Libro(1, "KING", "CARRIE", 1974, "DEBOLSILLO", 4, 999, "./ASSETS/Carrie-1981 (1).png"));
    baseDatos.push(new Libro(2, "KING", "CUJO", 1976, "DEBOLSILLO", 9, 899, "./ASSETS/Cujo.jpg"));
    baseDatos.push(new Libro(3, "KING", "SALEM'S LOT", 1988, "DEBOLSILLO", 8, 1100, "./ASSETS/salems lot.jpg"));
    baseDatos.push(new Libro(4, "KING", "IT", 1986, "DEBOLSILLO", 10, 1899, "./ASSETS/It-First-Edition.jpg"));
    baseDatos.push(new Libro(5, "KING", "PET SAMATARY", 1999, "SALAMANDRA", 5, 999, "./ASSETS/pet.jpg"));
    baseDatos.push(new Libro(6, "KING", "THE STAND", 1974, "SALAMANDRA", 3, 1499, "./ASSETS/the stand.jpg"));
    baseDatos.push(new Libro(7, "KING", "THE SHINNING", 1984, "DEBOLSILLO", 0, 1299, "./ASSETS/elResplandor.jpg"));
    baseDatos.push(new Libro(8, "KING", "MISERY", 1984, "DEBOLSILLO", 3, 999, "./ASSETS/missery.jpg"));

} else {
    let sessionStorageBaseDatos = JSON.parse(sessionStorage.baseDatos);

    for (let i = 0; i < sessionStorageBaseDatos.length; i++) {
        sessionStorageBaseDatos[i] = new Libro(sessionStorageBaseDatos[i].id, sessionStorageBaseDatos[i].autor, sessionStorageBaseDatos[i].titulo, sessionStorageBaseDatos[i].año, sessionStorageBaseDatos[i].editorial, sessionStorageBaseDatos[i].stock, sessionStorageBaseDatos[i].precio, sessionStorageBaseDatos[i].src, sessionStorageBaseDatos[i].cantidad)
        console.log(sessionStorageBaseDatos)

    }

    baseDatos = sessionStorageBaseDatos;

}

// ----------------------------- COMIENZO DEL CODIGO --------------------------------------------


let carro;

/* Revisamos que no haya un carrito guardado en storage*/
if (sessionStorage.carro == undefined) {
    carro = new Carrito;
} else {
    let sessionStorageCarro = JSON.parse(sessionStorage.carro);
    carro = new Carrito(sessionStorageCarro.name, sessionStorageCarro.items, sessionStorageCarro.total);
    actualizar();

}


// Este Loop itera por cada objeto dentro del array "baseDatos" y extrae los valores de las propiedades : titulo / src / precio. Luego asigna dichas propiedades a cada  selector con la clase .libro, siendo el primer hijo titulo, el segundo src y el tecero precio.

for (let i = 0; i < baseDatos.length; i++) {
    libros[i].children[0].textContent = baseDatos[i].titulo
    libros[i].children[1].src = baseDatos[i].src
    libros[i].children[2].textContent = `$${baseDatos[i].precio}`
    libros[i].children[3].addEventListener("click", () => {
        nuevoLibro = document.createElement('div')
        comprar(baseDatos[i]);
    });
};


//Aca agrego un eventListener al boton comprar. -----------------------------------------------------------------
botonComprar.addEventListener('click', function () {
    console.log("Compra");
});

botonClear.addEventListener('click', function () {
    console.log("click")
})


// FUNCIONES 

function comprar(libro) {
    carro.addLibro(libro);


}

function eliminar(libro) {
    carro.removeLibro(libro)
}



function agregarDOM(libro) {
    let nuevoDiv = document.createElement('div')
    agregarProductoACarro = `

 <img src="${libro.src}" alt="">
 <input class="cantidad" type="number" value="1">
 <p class="precio">$${libro.precio}</p>
 <button class="btn btn-danger delete">Delete</button>

 `

    nuevoDiv.innerHTML = agregarProductoACarro
    nuevoDiv.classList.add('producto-carrito')

    contenedor.appendChild(nuevoDiv)

    nuevoDiv.getElementsByClassName('delete')[0].addEventListener('click', function (event) {
        let botonDeleteApretado = event.target
        botonDeleteApretado.parentElement.remove()
        eliminar(libro)
    })


}

function actualizar() {
    total.innerText = `Total: $${carro.precioTotal()}`;

    sessionStorage.setItem("carro", carro);
    sessionStorage.carro = JSON.stringify(carro);

    sessionStorage.setItem("baseDatos", baseDatos);
    sessionStorage.baseDatos = JSON.stringify(baseDatos);

    console.log(carro);


}



