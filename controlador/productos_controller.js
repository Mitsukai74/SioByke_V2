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
    `;
    card.innerHTML = contenido;
    card.classList.add("card");
    return card;
    
};
const productos = document.querySelector("[datos-productos]");
const render = async () => {
    try {
        const listaProductos = await productos_servicios.listaProductos();
        listaProductos.forEach(element => {
        productos.appendChild(nuevoProducto(element.imagenUrl,element.nombre,element.descripcion))            
        });
    }catch(error){
        console.log(error);
    }
}
render();