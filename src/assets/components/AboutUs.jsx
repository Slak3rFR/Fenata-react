function AboutUs() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>
                
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
                    <p className="text-gray-700 mb-6">
                        Fenata nació con la visión de ofrecer productos de alta calidad a precios accesibles. 
                        Desde nuestros inicios, nos hemos comprometido con la excelencia y la satisfacción de 
                        nuestros clientes.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
                    <p className="text-gray-700 mb-6">
                        Brindar la mejor experiencia de compra, ofreciendo productos de calidad y un servicio 
                        excepcional a nuestros clientes.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Calidad en cada producto</li>
                        <li>Atención personalizada</li>
                        <li>Compromiso con nuestros clientes</li>
                        <li>Innovación constante</li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-4xl mb-2">🌟</div>
                            <h3 className="font-bold mb-2">Calidad Garantizada</h3>
                            <p className="text-gray-600">Productos seleccionados con los más altos estándares</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-2">🚚</div>
                            <h3 className="font-bold mb-2">Envío Rápido</h3>
                            <p className="text-gray-600">Entrega a todo el país</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-2">💯</div>
                            <h3 className="font-bold mb-2">Satisfacción</h3>
                            <p className="text-gray-600">Tu satisfacción es nuestra prioridad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs; 