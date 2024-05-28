import Navbar from '../components/navbar.jsx';
import ProductList from '../components/ProductList.jsx';
import Footer from '../components/Footer.jsx'
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <ProductList />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
