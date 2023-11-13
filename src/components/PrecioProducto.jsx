import PropTypes from "prop-types";

const PrecioProducto = ({ precio }) => {
  return (
    <div className='precio'>
      <h3>Precio del Producto</h3>
      <p>${precio}</p>
    </div>
  );
};

PrecioProducto.propTypes = {
  precio: PropTypes.string.isRequired,
};
export default PrecioProducto;

