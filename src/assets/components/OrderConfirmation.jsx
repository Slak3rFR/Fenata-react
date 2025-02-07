import { Link, useParams } from 'react-router-dom';

function OrderConfirmation() {
    const { orderId } = useParams();

    if (!orderId) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                    <p className="text-xl text-gray-600">No se encontró la orden</p>
                    <Link 
                        to="/" 
                        className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Volver a la Tienda
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg 
                            className="w-8 h-8 text-green-500" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">¡Compra Exitosa!</h2>
                    <p className="text-gray-600 mb-4">
                        Gracias por tu compra. Tu pedido ha sido procesado correctamente.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <p className="text-sm text-gray-600">Número de Orden:</p>
                        <p className="text-lg font-semibold text-gray-800">{orderId}</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <Link 
                        to="/" 
                        className="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Volver a la Tienda
                    </Link>
                    <Link 
                        to="/cart" 
                        className="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
                    >
                        Ir al Carrito
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OrderConfirmation; 