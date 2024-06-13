import { Link } from 'react-router-dom';
import { ProductPropTypes } from '../utils/ProductPropTypes';

const ProductCard = ({ product }) => {
  const getFormattedImageURL = (image) => {
    const nameWithoutExtension = image.split('.')[0];
    const folderName = nameWithoutExtension.slice(0, -2);
    return `/products/${folderName}/${image}`;
  };
  const folderName = product.images[0];
  //product.averageRating = 5;
  return (
    <div className=" rounded-lg p-4 flex flex-col items-start justify-between bg-gray-800">
      <Link to={`/products/${product._id}`} className="link">
        <img src={getFormattedImageURL(folderName)} alt={product.name} className="w-full h-full object-contain" />
      </Link>
      <h3 className="text-xl font-bold mt-2 text-white">{product.name}</h3>
      <p className="text-white">{product.totalPrice} €</p>
      <div className="flex items-center mt-2">
        {[...Array(product.averageRating)].map((_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
        {[...Array(5 - product.averageRating)].map((_, i) => (
          <span key={i} className="text-gray-300">★</span>
        ))}
        <span className="ml-2 text-white">{product.reviews} reseñas</span>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Añadir al carrito</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: ProductPropTypes.isRequired
};

export default ProductCard;
