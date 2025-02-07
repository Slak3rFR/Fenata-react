import PropTypes from "prop-types";
import "./Button.css";  // Importamos el CSS

export default function Button(props) {
    const { disabled, children, handleClick } = props;

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className="custom-button"
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    disabled: PropTypes.bool,         
    children: PropTypes.node.isRequired, 
    handleClick: PropTypes.func,     
};

// Valores por defecto
Button.defaultProps = {
    disabled: false,        
    handleClick: () => {},  
};
