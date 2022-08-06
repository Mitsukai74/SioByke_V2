import { productos_servicios } from "../servicios/producto_servicios";

const form = document.querySelector("[data-form]");
form.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const imagen = document.querySelector("[data-img]").value
    const nombre = document.querySelector("[data-nombre]").value
    const descripcion = document.querySelector("[data-descrip]").value

    productos_servicios.crearProduto(imagen,nombre,descripcion).then(respuesta => {
        window.location.href = "/index.html"
        alert("Producto creado")
        console.log(respuesta);
    }).catch(err => {
        console.log(err)
    })
});