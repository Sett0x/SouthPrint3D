import { Link } from 'react-router-dom';
import backgroundImage from '../assets/home-page-img.webp'; // Asegúrate de tener la ruta correcta de tu imagen de fondo

const HomePage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-sm grayscale"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gray-700 bg-opacity-50" />
      <div className="relative container mx-auto">
        <div className="bg-gray-800 bg-opacity-75 shadow-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-4">¡Bienvenido a SouthPrint 3D!</h1>
          <p className="text-lg text-gray-300 mb-8">Tu destino para impresión 3D y más.</p>
          <Link to="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Explorar productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
