import { barcelona, roma, paris, londres } from "./ciudades.js";

let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");
let botonElemento = document.getElementById("boton");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", function () {
    enlaces.forEach((enlace) => {
      enlace.classList.remove("active");
    });
    this.classList.add("active");

    let ciudad = obtenerContenido(this.textContent);

    tituloElemento.innerHTML = ciudad.titulo;
    subtituloElemento.innerHTML = ciudad.subtitulo;
    parrafoElemento.innerHTML = ciudad.parrafo;
    precioElemento.innerHTML = ciudad.precio;
    botonElemento.style.display = "block";
    botonElemento.value = ciudad.boton;
  });
});

function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
