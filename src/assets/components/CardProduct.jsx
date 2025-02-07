import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardProduct(props) {
    const { title, price, text, id } = props;

    return (
        <div className="pt-[20px] pb-[40px] ml-20">
            <div 
                className="w-[480px] h-[500px] rounded-2xl shadow-lg overflow-hidden bg-cover bg-center flex flex-col justify-between gradient-to-t from-black via-transparent to-transparent m-4"
                style={{
                    backgroundImage: "url('https://picsum.photos/580/600')",
                }}
            >
                <div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
                        <p className="text-sm text-white">{text}</p>
                        <p className="text-sm text-white">{price}</p>
                    </div>
                </div>
                <div className="px-6 pb-6">
                    <Link to={`/item/${id}`}>
                        <div className="custom-button">
                            Ver Detalle
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

// Definir PropTypes
CardProduct.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

// Definir valores por defecto (opcional)
CardProduct.defaultProps = {
    text: "Sin descripción disponible",
};

export default CardProduct;
