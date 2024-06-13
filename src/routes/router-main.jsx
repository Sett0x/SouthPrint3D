import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/main-layout.jsx';
import HomePage from '../pages/home-page.jsx';
import AboutPage from '../pages/about-page.jsx';
import ProductPage from '../pages/products-page.jsx';
import ProductDetailPage from '../pages/productDetail-page.jsx';
import FaqsPage from '../pages/faqs-page.jsx';
import ContactPage from '../pages/contact-page.jsx';
import LoginPage from '../pages/login-page.jsx';
import ProfilePage from '../pages/profile-page.jsx';
import CartPage from '../pages/cart-page.jsx';
import RegistrationPage from '../pages/registration-page.jsx'; // Importa la página de registro

function RouterMain() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Página principal */}
          <Route path="/about" element={<AboutPage />} /> {/* Página "Acerca de" */}
          <Route path="/contact" element={<ContactPage />} /> {/* Página de contacto */}
          <Route path="/faqs" element={<FaqsPage />} /> {/* Página de preguntas frecuentes */}
          <Route path="/products" element={<ProductPage />} /> {/* Página de productos */}
          <Route path="/products/:productId" element={<ProductDetailPage />} /> {/* Detalle del producto */}
          <Route path="/login" element={<LoginPage />} /> {/* Página de inicio de sesión */}
          <Route path="/profile" element={<ProfilePage />} /> {/* Página de perfil de usuario */}
          <Route path="/cart" element={<CartPage />} /> {/* Página del carrito de compras */}
          <Route path="/register" element={<RegistrationPage />} /> {/* Página de registro de usuario */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default RouterMain;
