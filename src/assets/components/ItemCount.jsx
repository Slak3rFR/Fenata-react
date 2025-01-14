import { useState } from "react";
import PropTypes from 'prop-types';

function ItemCount(props) {

    let [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count === props.max) return;
        
        setCount(count + 1);
    };
    const handleSubstract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    function handleClick() {
        props.onSubmitCount(count);
    }

return  (
    <div>
        <div>
            <button onClick={handleAdd}>+</button>
            <span>{count}</span>
            <button onClick={handleSubstract}>-</button>
        </div>
        <div>
            <button onClick={handleClick}>Agregar al carrito</button>
        </div>
    </div>
    );
}

ItemCount.propTypes = {
    max: PropTypes.number.isRequired, // Máximo número permitido para el contador
    onSubmitCount: PropTypes.func.isRequired, // Función que se ejecuta al hacer clic en "Agregar al carrito"
};

export default ItemCount