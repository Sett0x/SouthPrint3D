import { ProductPropTypes } from '../utils/ProductPropTypes'; // Importa las definiciones de PropTypes desde el archivo ProductPropTypes.jsx

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover" /> {/* Utiliza product.images[0] en lugar de product.image */}
      <h3 className="text-xl font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.price} €</p>
      <div className="flex items-center mt-2">
        {[...Array(product.averageRating)].map((_, i) => ( // Utiliza product.averageRating en lugar de product.rating
          <span key={i} className="text-yellow-500">★</span>
        ))}
        {[...Array(5 - product.averageRating)].map((_, i) => ( // Utiliza product.averageRating en lugar de product.rating
          <span key={i} className="text-gray-300">★</span>
        ))}
        <span className="ml-2 text-gray-600">{product.reviews} reseñas</span>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Añadir al carrito</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: ProductPropTypes.isRequired // Utiliza las definiciones de PropTypes desde el archivo ProductPropTypes.jsx
};

export default ProductCard;
