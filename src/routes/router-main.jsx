import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/main-layout.jsx';
import HomePage from '../pages/home-page.jsx';
import AboutPage from '../pages/about-page.jsx';
import ProductPage from '../pages/products-page.jsx';
import ProductDetailPage from '../pages/productDetail-page.jsx';
import FaqsPage from '../pages/faqs-page.jsx';
import ContactPage from '../pages/contact-page.jsx';
import LoginPage from '../pages/login-page.jsx';
import ProfilePage from '../pages/profile-page.jsx'; // Importa la página de perfil

function RouterMain() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Página principal */}
          <Route path="/about" element={<AboutPage />} /> {/* Otras rutas */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} /> {/* Agrega la ruta para la página de detalles del producto */}
          <Route path="/login" element={<LoginPage />} /> {/* Agrega la ruta para el componente LoginPage */}
          <Route path="/profile" element={<ProfilePage />} /> {/* Agrega la ruta para la página de perfil */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default RouterMain;
