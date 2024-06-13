import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';
import PropTypes from 'prop-types';
import userService from '../services/userService';

import Carousel from './Carousel';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

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

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await userService.getUserProfile();
        setAuthenticated(true); // Update authenticated state if successful
      } catch (error) {
        console.error('User not authenticated:', error);
        setAuthenticated(false); // Ensure authenticated is false on error
      }
    };

    checkAuthentication();
  }, []);

  const handleAddToCart = async () => {
    if (!authenticated) {
      setModalMessage('Debes iniciar sesión para añadir al carrito.');
      setModalVisible(true);
      return;
    }

    try {
      if (!product) {
        console.error('Producto no disponible');
        return;
      }

      const response = await userService.addItemToCart(product._id);
      if (response.status === 'already_in_cart') {
        setModalMessage('Este producto ya está en tu carrito.');
      } else {
        setModalMessage('Producto añadido al carrito correctamente.');
      }
      setModalVisible(true);
    } catch (error) {
      console.error('Error adding item to cart:', error);
      setModalMessage('Error al añadir el producto al carrito.');
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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

  const formattedImages = product.images.map(getFormattedImageURL);

  return (
    <div className="container mx-auto py-8 px-8">
      <div className="flex flex-col md:flex-row md:justify-center md:items-start">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Carousel images={formattedImages} />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-2xl text-gray-600">{product.totalPrice} €</p>
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
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </button>
          {modalVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-white p-4 rounded-lg shadow-lg">
                <button
                  className="absolute top-0 right-2 bg-transparent text-gray-600 hover:text-gray-900 text-2xl"
                  style={{ fontSize: '2rem', lineHeight: '1' }}
                  onClick={closeModal}
                >
                  &times;
                </button>
                <p className="mt-4 mb-4 ml-4 mr-10">{modalMessage}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

ProductDetail.propTypes = {
  productId: PropTypes.string.isRequired,
};
