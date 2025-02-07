import './Footer.css';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-4">Contacto</h3>
                        <p>Email: info@fenata.com</p>
                        <p>Teléfono: (123) 456-7890</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-4">Redes Sociales</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-bold mb-4">Ubicación</h3>
                        <p>Calle Principal 123</p>
                        <p>Santa Fe, Argentina</p>
                    </div>
                </div>
                <div className="text-center mt-8 pt-8 border-t border-gray-700">
                    <p>&copy; 2025 Fenata. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;