import { productos_servicios } from "../servicios/producto_servicios.js";

const nuevoProducto = (imagenUrl,nombre,descripcion) => {
   const card = document.createElement("div");
   const contenido = 
    `
   <div>
        <img src="${imagenUrl}">
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        </img>a href="">Ver producto</a>
    </div>
    `
    
};