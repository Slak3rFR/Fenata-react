import ItemCounter from '../components/ItemCounter';
import { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function ItemDetail({ title, price, description, stock, img, id, text }) {
    const { addItem } = useContext(cartContext);
    const [isInCart, setIsInCart] = useState(false);
    const [imageError, setImageError] = useState(false);

    function handleAddToCart(count) {
        addItem({ id, title, price, count, img, text });
        setIsInCart(true);
    }

    function handleImageError() {
        console.log("Error al cargar la imagen:", img);
        setImageError(true);
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Imagen del producto */}
                <div className="w-full">
                    {!imageError ? (
                        <img 
                            src={img} 
                            alt={title}
                            className="w-full h-[300px] object-cover"
                            onError={handleImageError}
                        />
                    ) : (
                        <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Imagen no disponible</span>
                        </div>
                    )}
                </div>
                {/* Detalles del producto */}
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3 text-center">{title}</h2>
                    <p className="text-gray-600 mb-3 text-center">{description}</p>
                    <div className="text-xl font-bold text-green-600 mb-4 text-center">
                        ${price}
                    </div>                    
                    {/* Stock */}
                    <div className="mb-4 text-center">
                        <span className="text-gray-600">
                            Stock disponible: {stock} unidades
                        </span>
                    </div>
                    {/* Botones */}
                    <div className="max-w-md mx-auto space-y-3">
                        {!isInCart ? (
                            <ItemCounter onSubmitCount={handleAddToCart} max={stock} />
                        ) : (
                            <div className="space-y-3">
                                <Link to="/cart" className="block">
                                    <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                                        Realizar pedido
                                    </button>
                                </Link>
                                <button 
                                    onClick={() => setIsInCart(false)}
                                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                                >
                                    Agregar Más
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

ItemDetail.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    text: PropTypes.string,
    description: PropTypes.string,
    stock: PropTypes.number.isRequired,
    img: PropTypes.string,
    id: PropTypes.string.isRequired
};

export default ItemDetail;

