import PropTypes from 'prop-types';
import NombreProducto from './NombreProducto';
import DescripcionProducto from './DescripcionProducto';
import PrecioProducto from './PrecioProducto';
import ProductoSKU from './ProductoSKU';
import CantidadDisponible from './CantidadDisponible';

const ProductoDetalle = ({nombre, descripcion, precio, sku, cantidadDisponible}) => {
  return (
    <div className='detalle'>
      
      <NombreProducto nombre={nombre} />
      <DescripcionProducto descripcion={descripcion} />
      <PrecioProducto precio={precio} />
      <ProductoSKU sku={sku} />
      <CantidadDisponible cantidad={cantidadDisponible} />
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
