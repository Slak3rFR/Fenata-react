import getAsyncData, { getAsyncItemsByCategory } from "../data/getAsyncData";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
const [products, setProducts] = useState([]);
console.log("%cRender de ItemListContainer", "color: yellow");
const { catid } = useParams();

useEffect(() => {
    if (catid === undefined) {
    const respuestaPromise = getAsyncData();
    console.log(respuestaPromise);
    respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    } else {
    const respuestaPromise = getAsyncItemsByCategory(catid);
    console.log(respuestaPromise);
    respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    }
}, [catid]);

return (
    <div>
    <ItemList greeting={greeting} products={products} />
    </div>
);
}

// Validación de PropTypes
ItemListContainer.propTypes = {
greeting: PropTypes.string.isRequired,
};

// Valor por defecto para 'greeting'
ItemListContainer.defaultProps = {
greeting: "Bienvenido a nuestra tienda",
};

export default ItemListContainer;
