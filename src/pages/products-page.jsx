//import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList.jsx';

const ProductPage = () => {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" />
        <div className="relative container mx-auto">
          <div className="p-8">
            <ProductList />
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductPage;
