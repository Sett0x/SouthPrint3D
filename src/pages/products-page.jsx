//import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList.jsx';

const ProductPage = () => {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-700 " />
        <div className="relative container mx-auto">
          <div className="bg-gray-700 p-8">
            <ProductList />
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductPage;
