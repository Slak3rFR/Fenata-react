import { useContext, useState, useEffect } from "react";
import { cartContext } from "../context/cartContext";
import { createBuyOrder } from "../data/database";
import { useNavigate } from 'react-router-dom';

function CartContainer() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: "",
        surname: "",
        dni: "",
        phone: "",
        email: ""
    });

    const [orderID, setOrderID] = useState(null);
    const { cartItems, removeItem, getTotalPrice, clearCart, addItem } = useContext(cartContext);

    function onInputChange(evt) {
        const { name, value } = evt.target;
        setUserData(prevData => ({ ...prevData, [name]: value }));
    }

    function updateItemQuantity(item, newCount) {
        if (newCount <= 0) {
            removeItem(item.id);
        } else {
            const currentStock = item.stock;
            const currentCount = item.count;            
            if (newCount > currentStock && newCount > currentCount) {
                alert('No hay suficiente stock');
            } else {
                addItem({ ...item, count: newCount - currentCount });
            }
        }
    }

    async function handleCheckOut(evt) {
        evt.preventDefault();
        if (cartItems.length === 0) return;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const dniRegex = /^\d{5,15}$/;
        const phoneRegex = /^\d{8,15}$/;
        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,30}$/;

        if (!nameRegex.test(userData.username)) {
            alert("Por favor, ingresa un nombre válido (solo letras, entre 2 y 30 caracteres)");
            return;
        }

        if (!nameRegex.test(userData.surname)) {
            alert("Por favor, ingresa un apellido válido (solo letras, entre 2 y 30 caracteres)");
            return;
        }

        if (!dniRegex.test(userData.dni)) {
            alert("Por favor, ingresa un número de documento válido (entre 5 y 15 dígitos)");
            return;
        }

        if (!phoneRegex.test(userData.phone)) {
            alert("Por favor, ingresa un número de teléfono válido (entre 8 y 15 dígitos)");
            return;
        }

        if (!emailRegex.test(userData.email)) {
            alert("Por favor, ingresa un email válido");
            return;
        }
        const order = {
            buyer: {
                name: userData.username,
                surname: userData.surname,
                dni: userData.dni,
                phone: userData.phone,
                email: userData.email
            },
            items: cartItems.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                count: item.count
            })),
            total: getTotalPrice(),
            date: new Date().toISOString()
        };
        try {
            const id = await createBuyOrder(order);
            setOrderID(id);
            clearCart();
            navigate(`/order-confirmation/${id}`);
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un error al procesar la orden");
        }
    }
    
    useEffect(() => {
        if (orderID) {
            alert(`¡Compra realizada con éxito! 🎉\nTu número de orden es: ${orderID}`);
        }
    }, [orderID]);
    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-white">
            <h1 className="text-4xl font-bold mb-4">Carrito de compras:</h1>
            {cartItems.length > 0 && (
                <button
                    onClick={clearCart}
                    className="mb-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-5 h-5 mr-2"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" 
                        />
                    </svg>
                    Vaciar Carrito
                </button>
            )}
            {cartItems.map((item) => (
                <div key={item.id} className="border p-4 w-3/4 my-2 shadow-md rounded-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-gray-700">Precio: ${item.price}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => updateItemQuantity(item, item.count - 1)}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded"
                            >
                                -
                            </button>
                            <span className="mx-2 font-semibold">{item.count}</span>
                            <button 
                                onClick={() => updateItemQuantity(item, item.count + 1)}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded"
                            >
                                +
                            </button>
                            <button 
                                onClick={() => removeItem(item.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                    <p className="text-right mt-2 font-semibold">Subtotal: ${item.price * item.count}</p>
                </div>
            ))}
            {cartItems.length > 0 && (
                <div className="w-3/4 mt-4 p-4 bg-gray-50 rounded-lg shadow-md">
                    <div className="flex justify-between items-center border-t-2 border-gray-200 pt-4">
                        <span className="text-xl font-bold">Total Final:</span>
                        <span className="text-2xl font-bold text-green-600">
                            ${getTotalPrice()}
                        </span>
                    </div>
                </div>
            )}
            {cartItems.length === 0 && !orderID && (
                <p className="text-gray-500 text-lg mt-5">El carrito está vacío.</p>
            )}
            {cartItems.length > 0 && (
                <form onSubmit={handleCheckOut} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                        Completa tus datos para finalizar la compra
                    </h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Nombre</label>
                        <input 
                            name="username" 
                            type="text" 
                            value={userData.username}
                            onChange={onInputChange}
                            pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,30}"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                            title="Solo letras, entre 2 y 30 caracteres"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Apellido</label>
                        <input 
                            name="surname" 
                            type="text" 
                            value={userData.surname}
                            onChange={onInputChange}
                            pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,30}"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                            title="Solo letras, entre 2 y 30 caracteres"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">DNI/Documento</label>
                        <input 
                            name="dni" 
                            type="text" 
                            value={userData.dni}
                            onChange={onInputChange}
                            pattern="\d{5,15}"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                            title="Número de documento debe tener entre 5 y 15 dígitos"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Teléfono</label>
                        <input 
                            name="phone" 
                            type="tel" 
                            value={userData.phone}
                            onChange={onInputChange}
                            pattern="\d{8,15}"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                            title="Número de teléfono debe tener entre 8 y 15 dígitos"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input 
                            name="email" 
                            type="email" 
                            value={userData.email}
                            onChange={onInputChange}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                            title="Ingresa un email válido"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-2 rounded-lg text-white font-semibold transition ${
                            userData.username && userData.surname && userData.dni && 
                            userData.phone && userData.email 
                                ? "bg-blue-600 hover:bg-blue-700" 
                                : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                        Finalizar Compra
                    </button>
                </form>
            )}
        </div>
    );
}

export default CartContainer;
