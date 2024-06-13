import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import userService from '../services/userService';

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-4 rounded-lg shadow-lg">
        <button
          className="absolute top-0 right-2 bg-transparent text-gray-600 hover:text-gray-900 text-2xl"
          style={{ fontSize: '2rem', lineHeight: '1' }}
          onClick={onClose}
        >
          &times;
        </button>
        <p className="mt-4 mb-4 ml-4 mr-10">{message}</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

const ProductCard = ({ product }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false); // Initialize as false

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

  const getFormattedImageURL = (image) => {
    const nameWithoutExtension = image.split('.')[0];
    const folderName = nameWithoutExtension.slice(0, -2);
    return `/products/${folderName}/${image}`;
  };

  return (
    <div className="rounded-lg p-4 flex flex-col items-start justify-between bg-gray-800">
      <Link to={`/products/${product._id}`} className="link">
        <img
          src={getFormattedImageURL(product.images[0])}
          alt={product.name}
          className="w-full h-full object-contain"
        />
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
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
        onClick={handleAddToCart}
      >
        Añadir al carrito
      </button>
      {modalVisible && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalPrice: PropTypes.number.isRequired,
    averageRating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
