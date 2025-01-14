import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './Button.css';

function Item ({ product }) {
    return (
    <div className="border p-4 rounded">
        <img src={product.img} alt="product img" />
        <h3 className="font-bold">{product.title}</h3>        
        <p>Precio: ${product.price}</p>
        <Link to={`/item/${product.id}`} className="text-blue-500 hover:underline">
        Ver detalle
        </Link>
    </div>
    );
};

Item.propTypes = {
    product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    }).isRequired,
};

export default Item;
