//CREACIÓN DE VARIABLES CARRITO DE COMPRAS

const carritoCompras = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaCursos = document.querySelector("#lista-cursos");
const btn_vacarCarrito = document.querySelector("#vaciar-carrito");


//FUNCIONES
cargarEventos();
function cargarEventos(){
    listaCursos.addEventListener('click', agregarCurso)
}

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        console.log("Agregando al carrito.")
    }else{
        console.log("Nada.")
    }
}