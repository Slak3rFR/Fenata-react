import { useState } from "react";
import PropTypes from "prop-types";

const Cart = ({ onAddToCart, onRemoveFromCart }) => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = `Producto ${items.length + 1}`;
    setItems([...items, newItem]);
    onAddToCart(); 
  };

  const removeItem = () => {
    if (items.length > 0) {
      const updatedItems = items.slice(0, -1); 
      setItems(updatedItems);
      onRemoveFromCart(); 
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Carrito</h2>
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={addItem}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-400"
        >
          Agregar al carrito
        </button>
        <button
          onClick={removeItem}
          disabled={items.length === 0}
          className={`${
            items.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-400"
          } text-white px-4 py-2 rounded`}
        >
          Eliminar del carrito
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="border p-2 rounded bg-gray-100">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};


Cart.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
