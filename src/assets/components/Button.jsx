import { useState } from "react";
import PropTypes from "prop-types";

export default function Button(props) {
const { color, disabled, children, handleClick } = props;

const [isDisabled, setIsDisabled] = useState(disabled);
const [colorState, setColorState] = useState(color);

return (
    <button
    onClick={handleClick}
    style={{ backgroundColor: colorState }}
    disabled={isDisabled}
    >
        {children}
    </button>
);
}

Button.propTypes = {
color: PropTypes.string,          
disabled: PropTypes.bool,         
children: PropTypes.node.isRequired, 
handleClick: PropTypes.func,     
};

// Valores por defecto
Button.defaultProps = {
color: "gray",          
disabled: false,        
handleClick: () => {},  
};
