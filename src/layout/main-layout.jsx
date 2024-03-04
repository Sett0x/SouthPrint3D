import Navbar from '../components/navbar.jsx';

import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-800 shadow-lg">
      <Navbar />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
