import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAsyncDataById } from "../data/database";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [itemInfo, setItemInfo] = useState(null);  // Inicializa como null para controlar el estado vacío
    const { id } = useParams();

    useEffect(() => {
        async function getItemData() {
            const itemData = await GetAsyncDataById(id);
            setItemInfo(itemData);  
        }
        getItemData();
    }, [id]);

    // No renderiza ItemDetail hasta que itemInfo esté listo
    if (!itemInfo) {
        return <div>Loading...</div>;
    }

    return (
        <ItemDetail {...itemInfo} id={id} />
    );
}

export default ItemDetailContainer;
