import { useState } from "react";
import PropTypes from 'prop-types';

function ItemCount(product) {
    let [count, setCount] = useState(1);
    const handleAdd = () => {
        if (count === product.max) return;        
        setCount(count + 1);
    };
    const handleSubstract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    function handleClick() {
        product.onSubmitCount(count);
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
    max: PropTypes.number.isRequired, 
    onSubmitCount: PropTypes.func.isRequired, 
};

export default ItemCount