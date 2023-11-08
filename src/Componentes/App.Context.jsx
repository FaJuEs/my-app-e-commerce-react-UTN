import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [datos,setDetalleProductos] = useState({
        nombre: "Nombre del Producto",
        descripcion: "Descripción del Producto",
        precio: '',
        sku: "SKU123456",
        cantidad: '',
      });

      useEffect(() => {
      fetch("datosProducto")
        .then((response) => response.json())
        .then((resul) => setDetalleProductos(resul));
    });

    /*const datos = {nombre, cantidad, descripcion, precio, sku}*/

    return <AppContext.Provider value={datos}>{children}</AppContext.Provider>;
};