import { useState } from 'react';
import PropTypes from "prop-types";
import { cartContext } from "./cartContext";

export function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addItem(item) {
        console.log("Agregando item al carrito:", item);
        const existingItem = cartItems.find(i => i.id === item.id);
        if (existingItem) {
            const updatedItems = cartItems.map(i => 
                i.id === item.id 
                    ? { ...i, count: i.count + item.count }
                    : i
            );
            setCartItems(updatedItems);
        } else {
            setCartItems([...cartItems, item]);
        }
    }

    function removeItem(itemId) {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    }

    function clearCart() {
        setCartItems([]);
    }

    function getTotalItems() {
        return cartItems.reduce((total, item) => total + (item.count || 0), 0);
    }

    function getTotalPrice() {
        return cartItems.reduce((total, item) => total + (item.price * item.count), 0);
    }

    return (
        <cartContext.Provider
        value={{
            cartItems,
            addItem,
            removeItem,
            clearCart,
            getTotalItems,
            getTotalPrice,
        }}
        >
        {children}
        </cartContext.Provider>
    );
    }

    CartContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
    };
