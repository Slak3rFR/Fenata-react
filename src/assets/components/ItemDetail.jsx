import PropTypes from "prop-types";
import ItemCount from "./ItemCount";

function ItemDetail({ price, title, description, text, img, stock }) {
    function onSubmitCount(count) {
        console.log(`Agregaste ${count} unidades al carrito`);
    }

    return (
        <div className="">
            <img src={img} width="150" height="150" alt="product img" />
            <div className="">
            <h3 className="">{title}</h3>
            <p className="">{text}</p>
            <div>
                <p className="">$ {price}</p>
            </div>
            <p>{description}</p>
            </div>
            <div>
            <ItemCount onSubmitCount={onSubmitCount} max={stock} />
            </div>
        </div>
        );
}

ItemDetail.propTypes = {
    img: PropTypes.string.isRequired, // Ruta de la imagen del producto
    title: PropTypes.string.isRequired, // Título del producto
    text: PropTypes.string, // Texto adicional del producto (opcional)
    price: PropTypes.number.isRequired, // Precio del producto
    description: PropTypes.string, // Descripción del producto (opcional)
    stock: PropTypes.number.isRequired, // Stock disponible del producto
};

export default ItemDetail;
