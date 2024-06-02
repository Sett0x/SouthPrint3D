import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';
import Carousel from './Carousel';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await productService.getProductById(productId);
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const getFormattedImageURL = (image) => {
    const nameWithoutExtension = image.split('.')[0];
    const folderName = nameWithoutExtension.slice(0, -2);
    return `/${folderName}/${image}`;
  };

  // Formateamos las imágenes antes de pasarlas al componente Carousel
  const formattedImages = product.images.map(getFormattedImageURL);

  return (
    <div className="container mx-auto py-8 px-8">
      <div className="flex flex-col md:flex-row md:justify-center md:items-start">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Carousel images={formattedImages} />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
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

export default ProductDetail;
