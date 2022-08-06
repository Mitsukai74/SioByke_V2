const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta=>
respuesta.json());

const crearProduto = (imagenUrl,nombre,descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({imagenUrl,nombre,descripcion})
    })
    .then (respuesta => {
        if (respuesta.ok) {
            return respueta.body
        }
        throw new Error("No fue posible la creación del producto, verifique los campos");
    })
}

export const productos_servicios = {
    listaProductos,
    crearProduto,
}
