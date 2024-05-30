import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/main-layout.jsx';
import HomePage from '../pages/home-page.jsx';
import AboutPage from '../pages/about-page.jsx';
import ProductPage from '../pages/products-page.jsx';

function RouterMain() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Página principal */}
          <Route path="/about" element={<AboutPage />} /> {/* Otras rutas */}
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default RouterMain;
