import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/main-layout.jsx';
import HomePage from '../pages/home-page.jsx';
import AboutPage from '../pages/about-page.jsx';




function RouterMain() {
  return (
    
<Router>
<MainLayout>

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página principal */}
        <Route path="/about" element={<AboutPage />} /> 
    </Routes>
    </MainLayout>
</Router>
  );
}

export default RouterMain;
