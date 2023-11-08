import React, { useState, useEffect } from "react";
import './App.css';
import DetalleProducto from "./DetalleProducto";



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
      <DetalleProducto producto={DatosProducto} />
    </div>
  );
}

export default App; 
