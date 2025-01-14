import { useState, useEffect } from "react";
import { getAsyncItemById } from "../data/getAsyncData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
        async function getProduct() {
            const data = await getAsyncItemById(id);
            setProduct(data);
            }
        getProduct();
    }
}, [id]);

    if (!product) {
        return <div>Cargando producto...</div>;
    }

return <ItemDetail {...product} />;
}

export default ItemDetailContainer;

