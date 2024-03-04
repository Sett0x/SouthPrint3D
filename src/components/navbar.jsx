//import React from 'react';
// import SouthPrintBox from '../assets/SouthPrint_box.svg';
// import SouthPrintS from '../assets/SouthPrint_S.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (


    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-white text-xl font-bold">Mi Tienda</a>
          
          {/* Menú de navegación */}
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:text-gray-300">Inicio</a></li>
            <li><Link href="/productos" className="text-white hover:text-gray-300">Productos</Link></li>
            <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
            <li><a href="/ofertas" className="text-white hover:text-gray-300">Ofertas</a></li>
            <li><a href="/carrito" className="text-white hover:text-gray-300">Carrito</a></li>
            <li><a href="/login" className="text-white hover:text-gray-300">Iniciar sesión</a></li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
