import DescripcionProducto from "./DescripcionProducto";
import PrecioProducto from "./PrecioProducto";
import ProductoSKU from "./ProductoSKU";
import CantidadProducto from "./CantidadProducto";
import NombreProducto from "./NombreProducto";

function DetalleProducto({ producto }) {
  return (
    <div>
      <NombreProducto nombre={producto.nombre} />
      <DescripcionProducto descripcion={producto.descripcion} />
      <PrecioProducto precio={producto.precio} />
      <ProductoSKU sku={producto.sku} />
      <CantidadProducto cantidad={producto.cantidad} />
    </div>
  );
}

export default DetalleProducto;
