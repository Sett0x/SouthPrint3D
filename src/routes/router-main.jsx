import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/main-layout.jsx';
import HomePage from '../pages/home-page.jsx';
import AboutPage from '../pages/about-page.jsx';
import ProductPage from '../pages/products-page.jsx';
import ProductDetailPage from '../pages/productDetail-page.jsx'
import FaqsPage from '../pages/fags-page.jsx';
import ContactPage from '../pages/contact-page.jsx';

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
          
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default RouterMain;
