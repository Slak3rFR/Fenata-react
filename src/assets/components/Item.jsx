import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './Button.css';

function Item ({ product }) {
    return (
    <div className="border p-4 rounded">
        <img src={product.img} alt="product img" />
        <h3 className="m-1 font-bold">{product.title}</h3>        
        <p className="m-1">Precio: ${product.price}</p>
        <Link to={`/item/${product.id}`} className="mt-3 px-4 py-1.5 bg-black text-white rounded-md hover:bg-blue-800 transition-colors duration-300">
        Ver detalle
        </Link>
    </div>


    );
};

Item.propTypes = {
    product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    }).isRequired,
};

export default Item;