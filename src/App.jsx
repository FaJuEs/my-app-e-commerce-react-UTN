/* import Esquema from "./maquetacion/Esquema";
import ProductoDetalle from "./components/ProductoDetalle.jsx";
import { Routes, Route } from "react-router-dom";
import NombreProducto from "./components/NombreProducto";
import DescripcionProducto from "./components/DescripcionProducto";
import PrecioProducto from "./components/PrecioProducto";
import ProductoSKU from "./components/ProductoSKU";
import CantidadDisponible from "./components/CantidadDisponible";


export function App() {

  return (

    <>
    <Esquema>
      <Routes>
        <Route path="./components/NombreProducto" exact><NombreProducto /></Route>
        <Route path="./components/ProductoDetalle"><ProductoDetalle /></Route>
        <Route path="./components/DescripcionProducto" exact/><DescripcionProducto/><Route/>
        <Route path="./components/PrecioProducto" exact><PrecioProducto/></Route>
        <Route path="./components/ProductoSKU" exact><ProductoSKU/></Route>
        <Routes path="./components/CantidadDisponible" exact/><CantidadDisponible/><Route/>
      </Routes>
    </Esquema>
  </>
  ); */

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
