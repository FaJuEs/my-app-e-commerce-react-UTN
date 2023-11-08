import React from "react";

function ProductoSKU({ sku }) {
  return (
    <div>
      <h3>Sku del Producto</h3>
      <p>{sku}</p>
    </div>
  );
}

export default ProductoSKU;