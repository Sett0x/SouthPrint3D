import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { ProductPropTypes } from '../utils/ProductPropTypes'; // Importa las definiciones de PropTypes desde el archivo ProductPropTypes.jsx

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="container mx-auto py-8">
      <div className="flex">
        <div className="w-1/2">
          <img src={product.images[0]} alt={product.name} className="w-full h-96 object-cover" />
          <div className="flex mt-4">
            {product.images.map((img, i) => (
              <img key={i} src={img} alt={`Producto ${i}`} className="w-24 h-24 object-cover mx-1" />
            ))}
          </div>
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-2xl text-gray-600">{product.price} €</p>
          <div className="flex items-center mt-2">
            {[...Array(product.averageRating)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
            {[...Array(5 - product.averageRating)].map((_, i) => (
              <span key={i} className="text-gray-300">★</span>
            ))}
            <span className="ml-2 text-gray-600">{product.reviews} reseñas</span>
          </div>
          <p className="mt-4">{product.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  products: PropTypes.arrayOf(ProductPropTypes).isRequired // Utiliza las definiciones de PropTypes desde el archivo ProductPropTypes.jsx
};

export default ProductDetail;
