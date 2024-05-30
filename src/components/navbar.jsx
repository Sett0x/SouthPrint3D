import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">SouthPrint3D</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Inicio</Link>
          <Link to="/products" className="text-white hover:text-gray-400">Productos</Link>
          <Link to="/about" className="text-white hover:text-gray-400">Quiénes somos</Link>
          <Link to="/contact" className="text-white hover:text-gray-400">Contacto</Link>
          <Link to="/faqs" className="text-white hover:text-gray-400">FAQS</Link>
          <Link to="/cart" className="text-white hover:text-gray-400"><i className="fas fa-shopping-cart"></i></Link>
          <Link to="/profile" className="text-white hover:text-gray-400"><i className="fas fa-user"></i></Link>
        </div>
        <div className="space-x-4">
          <button className="text-white">🛒</button>
          <button className="text-white">👤</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
