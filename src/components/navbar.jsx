import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">SouthPrint3D</Link>
        </div>
        <div className="space-x-4">
          <Link className="text-white" to="/">Inicio</Link>
          <Link className="text-white" to="/products">Productos</Link>
          <Link className="text-white" to="/about">Quiénes somos</Link>
          <Link className="text-white" to="/contact">Contacto</Link>
          <Link className="text-white" to="/faqs">FAQs</Link>
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
