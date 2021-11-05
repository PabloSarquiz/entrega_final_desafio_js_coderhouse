


// -------------------- Selectores del DOM  ------------------------------------------------------------
let libros = document.querySelectorAll(".libro");
let botonesDelete = document.querySelectorAll(".delete");
let botonComprar = document.getElementById("buy");
let botonClear = document.getElementById("clear");
let total = document.getElementById('total');
// let quantity = document.getElementsByClassName('quantity')[0];
let contenedor = document.getElementById('contenedor');
let cant = document.getElementsByClassName('cantidad')



// -------------------------------- Declaracion de CLASES.-----------------------------------------------
// Clase Carrito con su constructor.---------------------------------------------------------------------
class Carrito {
    constructor(name = "Usuario", items = [], total
        = 0) {
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



}



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
        sessionStorageBaseDatos[i] = new Libro(sessionStorageBaseDatos[i].id, sessionStorageBaseDatos[i].autor, sessionStorageBaseDatos[i].titulo, sessionStorageBaseDatos[i].año, sessionStorageBaseDatos[i].editorial, sessionStorageBaseDatos[i].stock, sessionStorageBaseDatos[i].precio, sessionStorageBaseDatos[i].src)
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
    carro.clearCarrito()
})


// FUNCIONES 

function comprar(libro) {
    carro.addLibro(libro);


}

function eliminar(libro) {
    carro.removeLibro(libro)
}



function agregarDOM(libroCarrito) {
    let nuevoDiv = document.createElement('div')
    agregarProductoACarro = `

 <img src="${libroCarrito.src}" alt="">
 <button class=" less btn btn-info"><</button>
 <p id="quantity">x${libroCarrito.cantidad}</p>
 <button class=" more btn btn-info">></button>
 <p class="precio">$${libroCarrito.precio}</p>
 <button class="btn btn-danger delete">Delete</button>

 `

    nuevoDiv.innerHTML = agregarProductoACarro
    nuevoDiv.classList.add('producto-carrito')

    contenedor.appendChild(nuevoDiv)

    nuevoDiv.getElementsByClassName('less')[0].addEventListener('click', function (event) {
        event.target

        if (libroCarrito.cantidad > 1) {
            libroCarrito.cantidad--
            libroCarrito.stock++
            actualizar()
        } else return

    })


    nuevoDiv.getElementsByClassName('more')[0].addEventListener('click', function (event) {
        event.target
        if (libroCarrito.stock > 0) {
            libroCarrito.cantidad++
            libroCarrito.stock--
            actualizar()
        } else alert("No hay mas stock");


    })


    nuevoDiv.getElementsByClassName('delete')[0].addEventListener('click', function (event) {
        let botonDeleteApretado = event.target
        botonDeleteApretado.parentElement.remove()
        eliminar(libroCarrito)
    })






    // $(document).ready(function () {




    //     $(".less").click(function (event) {
    //         event.target
    //         libroCarrito.cantidad-- 
    //         libroCarrito.stock++
    //         actualizar()

    //     })


    //     $(".more").click(function (event) {
    //         event.target
    //         console.log("click")
    //         libroCarrito.cantidad++
    //         libroCarrito.stock--
    //         actualizar()


    //     })

    // })


}

function actualizar() {
    total.innerText = `Total: $${carro.precioTotal()}`;
    


    sessionStorage.carro = JSON.stringify(carro);


    sessionStorage.baseDatos = JSON.stringify(baseDatos);

    console.log(carro);


}


