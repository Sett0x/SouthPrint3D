import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú cuando se hace clic en un enlace del menú
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Remove the unused variable 'handleDocumentClick'

    const handleMenuOptionClick = () => {
      const navbarDefault = document.getElementById('navbar-default');
      navbarDefault.classList.add('hidden');
      navbarDefault.setAttribute('aria-expanded', 'false');
    };

    const menuOptions = document.querySelectorAll('#navbar-default a');
    menuOptions.forEach((option) => {
      option.addEventListener('click', handleMenuOptionClick);
    });

    return () => {
      menuOptions.forEach((option) => {
        option.removeEventListener('click', handleMenuOptionClick);
      });
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const ul = document.querySelector('[x-ref="logos"]');
    if (ul) {
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    const checkSectionInView = () => {
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          const sectionId = section.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('font-black', 'text-white');
            } else {
              link.classList.remove('font-black', 'text-white');
            }
          });
          setActiveLink(`#${sectionId}`);
        }
      });
    };

    window.addEventListener('load', checkSectionInView);
    window.addEventListener('scroll', checkSectionInView);

    return () => {
      window.removeEventListener('load', checkSectionInView);
      window.removeEventListener('scroll', checkSectionInView);
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">SouthPrint3D</Link>
        </div>
        <button 
          id="menu-toggle"
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" 
          aria-controls="navbar-default" 
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-800 bg-gray-800 border-gray-700">
            <li>
              <Link to="/" onClick={closeMenu} className={`block py-2 px-3 text-white ${activeLink === '/' ? 'font-black' : ''} hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0`}>Inicio</Link>
            </li>
            <li>
              <Link to="/products" onClick={closeMenu} className={`block py-2 px-3 text-white ${activeLink === '/products' ? 'font-black' : ''} hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0`}>Productos</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu} className={`block py-2 px-3 text-white ${activeLink === '/about' ? 'font-black' : ''} hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0`}>Quiénes somos</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu} className={`block py-2 px-3 text-white ${activeLink === '/contact' ? 'font-black' : ''} hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0`}>Contacto</Link>
            </li>
            <li>
              <Link to="/faqs" onClick={closeMenu} className={`block py-2 px-3 text-white ${activeLink === '/faqs' ? 'font-black' : ''} hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0`}>FAQS</Link>
            </li>
            <li>
              <Link to="/cart" onClick={closeMenu} className={`block py-2 px-3 text-white ${activeLink === '/cart' ? 'font-black' : ''} hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0`}>Carrito</Link>
            </li>
            <li>
              <Link to="/profile" onClick={closeMenu} className={`block py-2 px-3 text-white ${activeLink === '/profile' ? 'font-black' : ''} hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0`}>Usuario</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
