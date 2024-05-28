import Navbar from '../components/navbar.jsx';
import ProductList from '../components/ProductList.jsx';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <ProductList />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
