import React from "react";


function PrecioProducto({ precio }) {
    return (
      <div>
        <h3>Precio del Producto</h3>
        <p>${precio}</p>
      </div>
    );
  }
  
  export default PrecioProducto;