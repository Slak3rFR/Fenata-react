import { useState, useEffect } from "react";
import { getAsyncItemById } from "../data/getAsyncData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
const [product, setProduct] = useState(null); // Cambiar el valor inicial a null
const { id } = useParams();

useEffect(() => {
    async function getProduct() {
    const data = await getAsyncItemById(id);
      setProduct(data); // Asignamos el producto cuando se obtiene
    }
    getProduct();
}, [id]);

  // Si el producto no ha llegado aún, mostramos un mensaje de carga
if (!product) {
    return <div>Cargando...</div>;
}

  // Si ya tenemos el producto, pasamos los props a ItemDetail
return <ItemDetail product={product} />;
}

export default ItemDetailContainer;

