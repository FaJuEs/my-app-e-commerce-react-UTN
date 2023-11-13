import PropTypes from "prop-types";

const DescripcionProducto = ({ descripcion }) => {
  return (
    <div className="descripcion">
      <h3>Descripción del Producto</h3>
      <p>{descripcion}Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
  );
};

DescripcionProducto.propTypes = {
  descripcion: PropTypes.string.isRequired,
};
export default DescripcionProducto;
