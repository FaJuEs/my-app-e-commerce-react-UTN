import PropTypes from "prop-types";

const CantidadDisponible = ({ cantidad }) => {
  return (
    <div className="cantidad">
      <h3>Cantidad Disponible</h3>
      <p>{cantidad} unidades</p>
    </div>
  );
};

CantidadDisponible.propTypes = {
  cantidad: PropTypes.string.isRequired,
};
export default CantidadDisponible;
