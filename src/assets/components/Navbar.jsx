import PropTypes from "prop-types";

const Navbar = ({ cartCount }) => {
    return (
        <nav className="text-black fixed top-0 left-0 w-full border-b-4 border-bottom-color: rgb(12 10 9);">
            <div className="container mx-auto px-4 py-2 flex items-center justify-evenly">
            <div className="text-xl font-bold drop-shadow-xl"><img className="h-10" src="../../../public/fenata2.png" alt="" /></div>
            <ul className="flex space-x-6">
                <li><a href="#inicio" className="hover:text-red-500 font-bold pl-10 pr-10 text-xl">Inicio</a></li>
                <li><a href="#productos" className="hover:text-red-500 font-bold pl-10 pr-10 text-xl">Productos</a></li>
                <li><a href="#productos" className="hover:text-red-500 font-bold pl-10 pr-10 text-xl">Nosotros</a></li>
                <li><a href="#contacto" className="hover:text-red-500 font-bold pl-10 pr-10 text-xl">Contacto</a></li>
            </ul>            
            <div className="relative">
                <button className="flex items-center text-sm bg-gray-700 p-2 rounded hover:bg-gray-500">
                🛒
                <span className="ml-2 bg-white text-black rounded-full text-xs px-2 py-1">
                    {cartCount}
                </span>
                </button>
            </div>
            </div>
        </nav>
        );
    };
    


// Validación de props
Navbar.propTypes = {
    cartCount: PropTypes.number.isRequired,
};

export default Navbar;
