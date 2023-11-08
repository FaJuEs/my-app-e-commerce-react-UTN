import React from "react";

function CantidadProducto({ cantidad }) {
  return (
    <div>
      <h3>Cantidad Disponible</h3>
      <p>{cantidad} unidades</p>
    </div>
  );
}

export default CantidadProducto;