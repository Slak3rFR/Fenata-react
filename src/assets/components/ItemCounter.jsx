import { useState } from "react";
import PropTypes from 'prop-types';

function ItemCounter({ onSubmitCount, max }) {
    const [count, setCount] = useState(1);

    function handleAdd() {
        if (count < max) {
            setCount(count + 1);
        }
    }

    function handleSubstract() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function handleSubmit() {
        if (count <= max) {
            onSubmitCount(count);
        }
    }

    return (
        <div className="flex flex-col items-center space-y-4 w-full max-w-xs mx-auto">
            <div className="flex items-center justify-center space-x-4">
                <button
                    onClick={handleSubstract}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg w-12"
                    disabled={count <= 1}
                >
                    -
                </button>
                <span className="text-xl font-bold text-gray-800 w-12 text-center">{count}</span>
                <button
                    onClick={handleAdd}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg w-12"
                    disabled={count >= max}
                >
                    +
                </button>
            </div>
            <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 max-w-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={count > max || max <= 0}
            >
                Agregar al Carrito
            </button>
        </div>
    );
}

ItemCounter.propTypes = {
    onSubmitCount: PropTypes.func.isRequired,
    max: PropTypes.number.isRequired
};

export default ItemCounter;