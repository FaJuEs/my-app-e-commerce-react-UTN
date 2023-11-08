import React from "react";
import './App.css';
import DetalleDeProducto from "./DetalleDeProducto";

function App() {
  const DatosProducto = {
    nombre: "Nombre del Producto",
    descripcion: "Descripción del Producto",
    precio: 100.0,
    sku: "SKU123456",
    cantidad: 10,
  };

  return (
    <div className="App">
      <h1>Detalle del Producto</h1>
      <DetalleDeProducto producto={DatosProducto} />
    </div>
  );
}

export default App;
