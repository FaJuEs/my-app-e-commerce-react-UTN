import PropTypes from "prop-types";
import { useState } from "react";
import NombreProducto from "./NombreProducto";
import DescripcionProducto from "./DescripcionProducto";
import PrecioProducto from "./PrecioProducto";
import ProductoSKU from "./ProductoSKU";
import CantidadDisponible from "./CantidadDisponible";

const ProductoDetalle = ({
  nombre,
  descripcion,
  precio,
  sku,
  cantidadDisponible,
}) => {
  const [compraRealizada, setCompraRealizada] = useState(false);

  const handleCompraClick = () => {
    setCompraRealizada(true);
  };

  return (
    <div className="detalle">
      <NombreProducto nombre={nombre} />
      <DescripcionProducto descripcion={descripcion} />
      <PrecioProducto precio={precio} />
      <ProductoSKU sku={sku} />
      <CantidadDisponible cantidad={cantidadDisponible} />

      <button onClick={handleCompraClick} disabled={compraRealizada}>
        Comprar
      </button>

      {compraRealizada && <p> GRACIAS POR SU COMPRA !!!</p>}
    </div>
  );
};

ProductoDetalle.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  sku: PropTypes.string.isRequired,
  cantidadDisponible: PropTypes.number.isRequired,
};

export default ProductoDetalle;
