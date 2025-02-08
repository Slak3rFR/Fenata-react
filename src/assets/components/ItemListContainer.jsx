import { useParams } from 'react-router-dom'
import { getData, getCategoryData } from '../data/database.js';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Loader from './Loader';
import FlexContainer from './FlexContainer';

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { catId } = useParams();

    useEffect(() => {
        setLoading(true);

        if (catId === undefined) {
            getData()
                .then((response) => {
                    setProducts(response);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error loading products:", error);
                    setLoading(false);
                });
        } else {
            getCategoryData(catId)
                .then((response) => {
                    setProducts(response);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error loading products:", error);
                    setLoading(false);
                });
        }
    }, [catId]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen mt-10">
            {!catId && (
                <h1 className="text-4xl font-bold text-center text-black">
                    ¡Bienvenido, encontrá el outfit que siempre soñaste!
                </h1>
            )}
            <FlexContainer>
                <div className="flex flex-wrap justify-center">
                    <ItemList products={products}/>
                </div>
            </FlexContainer>
        </div>
    );
}
