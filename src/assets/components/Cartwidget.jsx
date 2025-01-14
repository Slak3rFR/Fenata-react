import PropTypes from "prop-types";

export default function CartWidget({ count = 0 }) {
  return (
    <div className="cart-icon">    
      <span className="cart-count">{count}</span>
    </div>
  );
}

// Validaciones de PropTypes
CartWidget.propTypes = {
  count: PropTypes.number, // 'count' debe ser un número y es obligatorio
};
