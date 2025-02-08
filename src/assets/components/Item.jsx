import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './Button.css';

function Item ({ product }) {
    return (
        <div className="bg-white p-4 rounded-lg [box-shadow:3px_3px_8px_rgba(0,0,0,0.2),_-3px_3px_8px_rgba(0,0,0,0.2)] hover:[box-shadow:6px_6px_15px_rgba(0,0,0,0.3),_-6px_6px_15px_rgba(0,0,0,0.3)] transition-all duration-300 w-[280px]">
            <div className="overflow-hidden">
                <img 
                    src={product.img} 
                    alt="product img" 
                    className="w-full h-52 object-cover transform hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="mt-3 font-bold text-lg">{product.title}</h3>        
            <p className="my-2 text-gray-700 font-semibold">Precio: ${product.price}</p>
            <Link 
                to={`/item/${product.id}`} 
                className="mt-3 w-full text-center px-3 py-1.5 bg-black text-white rounded-lg hover:bg-gray-400 hover:text-black transition-colors duration-300"
            >
                Ver detalle
            </Link>
        </div>
    );
}

Item.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired,
};

export default Item;