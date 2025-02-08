import { Link } from "react-router-dom";
import CartWidget from "./Cartwidget";

const Navbar = () => {
    return (
    <nav className="text-black fixed top-0 left-0 w-full border-b-4 border-bottom-color: rgb(12 10 9) bg-white z-50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-evenly">
            <div className="text-xl font-bold drop-shadow-xl">
                <Link to="/">
                    <img className="h-10 hover:rotate-3 transition-all duration-300" src="/fenata2.png" alt="" />
                </Link>
            </div>
            <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-gray-500 hover:shadow-xl font-bold pl-10 pr-10 text-xl">Inicio</Link></li>
                <li><Link to="/category/productos" className="hover:text-gray-500 hover:shadow-xl font-bold pl-10 pr-10 text-xl">Productos</Link></li>
                <li><Link to="/category/nosotros" className="hover:text-gray-500 hover:shadow-xl font-bold pl-10 pr-10 text-xl">Nosotros</Link></li>
                <li><Link to="/category/contacto" className="hover:text-gray-500 hover:shadow-xl font-bold pl-10 pr-10 text-xl">Contacto</Link></li>
            </ul>
            <CartWidget />

        </div>
    </nav>
    );
};

export default Navbar;

