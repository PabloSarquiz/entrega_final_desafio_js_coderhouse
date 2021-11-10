// ---------------------------- Aca estoy simulando una base de datos. ------------------------------------------ 

let baseDatos = [];

if (sessionStorage.baseDatos == undefined) {

    baseDatos = []

    baseDatos.push(new Libro(1, "KING", "CARRIE", 1974, "DEBOLSILLO", 4, 999, "./assets/imgs/Carrie-1981 (1).png"));
    baseDatos.push(new Libro(2, "KING", "CUJO", 1976, "DEBOLSILLO", 9, 899, "./assets/imgs/Cujo.jpg"));
    baseDatos.push(new Libro(3, "KING", "SALEM'S LOT", 1988, "DEBOLSILLO", 8, 1100, "./assets/imgs/salems lot.jpg"));
    baseDatos.push(new Libro(4, "KING", "IT", 1986, "DEBOLSILLO", 10, 1899,"./assets/imgs/It-First-Edition.jpg"));
    baseDatos.push(new Libro(5, "KING", "PET SAMATARY", 1999, "SALAMANDRA", 5, 999, "./assets/imgs/pet.jpg"));
    baseDatos.push(new Libro(6, "KING", "THE STAND", 1974, "SALAMANDRA", 3, 1499, "./assets/imgs/the stand.jpg"));
    baseDatos.push(new Libro(7, "KING", "THE SHINNING", 1984, "DEBOLSILLO", 0, 1299,"./assets/imgs/elResplandor.jpg"));
    baseDatos.push(new Libro(8, "KING", "MISERY", 1984, "DEBOLSILLO", 3, 999,"./assets/imgs/missery.jpg"));

} else {
    let sessionStorageBaseDatos = JSON.parse(sessionStorage.baseDatos);

    for (let i = 0; i < sessionStorageBaseDatos.length; i++) {
        sessionStorageBaseDatos[i] = new Libro(sessionStorageBaseDatos[i].id, sessionStorageBaseDatos[i].autor, sessionStorageBaseDatos[i].titulo, sessionStorageBaseDatos[i].año, sessionStorageBaseDatos[i].editorial, sessionStorageBaseDatos[i].stock, sessionStorageBaseDatos[i].precio, sessionStorageBaseDatos[i].src)
        console.log(sessionStorageBaseDatos)

    }

    baseDatos = sessionStorageBaseDatos;

}