import ProductoDetalle from "./components/ProductoDetalle";

function App() {
  const producto = {
    nombre: "Nombre del Producto",
    descripcion: "Descripción del Producto",
    precio: 29.99,
    sku: "SKU123456",
    cantidadDisponible: 50,
  };

  return (
    <div className="header">
      <header>
        <h1>Detalle de Producto</h1>
      </header>

      <ProductoDetalle {...producto} />
      <footer>©2023-C:81-UTN</footer>
    </div>
  );
}

export default App;

/* 

import ProductoDetalle from './components/ProductoDetalle';

function App() {
  const producto = {
    nombre: 'Nombre del Producto',
    descripcion: 'Descripción del Producto',
    precio: 29.99,
    sku: 'SKU123456',
    cantidadDisponible: 50,
  };

  return (
    
    <div className="header">
      <header><h1>Detalle de Producto</h1></header>
    
      <ProductoDetalle {...producto} />
      <footer>©2023-C:81-UTN</footer>
      </div>
  );
}

export default App;
 */
