import { useParams } from 'react-router-dom'
import getAsyncData, { GetAsyncDataByCategory } from '../data/database';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Loader from './Loader';

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {catid} = useParams();

    useEffect(() => {
        setLoading(true);
        
        if (catid === undefined) {
            getAsyncData()
                .then((response) => {
                    setProducts(response);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error loading products:", error);
                    setLoading(false);
                });
        } else {          
            GetAsyncDataByCategory(catid)
                .then((response) => {
                    setProducts(response);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error loading products:", error);
                    setLoading(false);
                });
        }
    }, [catid]);
    
    if (loading) {
        return <Loader />;
    }

    return (
        <div className='flex flex-wrap'>
            <ItemList products={products}/>
        </div>
    );
}
