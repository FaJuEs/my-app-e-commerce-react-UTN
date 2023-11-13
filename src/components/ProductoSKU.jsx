import PropTypes from "prop-types";


const ProductoSKU = ({ sku }) => {
  return (
    <div className="sku">
      <h3>Sku del Producto</h3>
      <p>{sku}</p>
    </div>
  );
};

ProductoSKU.propTypes = {
  sku: PropTypes.string.isRequired,
};

export default ProductoSKU;
