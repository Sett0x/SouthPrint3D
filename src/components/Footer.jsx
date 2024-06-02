const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Contáctanos</h2>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img src="/icons/phone.svg" alt="Phone Icon" className="h-10 w-10" />
            <p className="text-gray-300">Tel: 744 43 32 56</p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
            <img src="/icons/email.svg" alt="Email Icon" className="h-10 w-10" />
            <p className="text-gray-300">Email: southprint3d@gmail.com</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <img src="/icons/instagram.svg" alt="Instagram Icon" className="h-10 w-10" />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <img src="/icons/tiktok.svg" alt="Tiktok Icon" className="h-10 w-10" />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <img src="/icons/youtube.svg" alt="Youtube Icon" className="h-10 w-10" />
          </a>
          {/* Agrega más iconos de redes sociales aquí */}
        </div>
      </div>
      <p className="mt-4 text-center">&copy; 2024 SouthPrint3D. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
