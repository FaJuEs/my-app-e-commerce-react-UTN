import PropTypes from "prop-types";


const NombreProducto = ({nombre}) => {
  return (
    <div className ='nombre'> 
    <h2>{nombre}</h2> <br /><br />
    
    <div className="img">
         <img src="public/assets/img/img1.png" alt="img-producto"/>  
        </div>
</div>
      
    );
};

NombreProducto.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default NombreProducto;