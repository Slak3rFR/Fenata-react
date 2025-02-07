import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItemData } from '../data/database.js';
import ItemDetail from './ItemDetail';
import Loader from './Loader';

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getItemData(id)
            .then(response => {
                setProduct(response);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <ItemDetail 
                id={product.id}
                title={product.title}
                price={product.price}
                stock={product.stock}
                description={product.description}
                img={product.img}
                category={product.category}
                text={product.text}
            />
        </div>
    );
}

export default ItemDetailContainer;
