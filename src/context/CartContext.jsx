import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes
import cartService from '../services/cartService';
import userService from '../services/userService';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await cartService.getCartItems();
        setCart(response.data); // Suponiendo que response.data contiene los elementos del carrito
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (productId, quantity) => {
    try {
      const user = await userService.getUserProfile(); // Obtener el perfil de usuario que incluye el ID
      const userId = user.data.id; // Obtener el ID de usuario del objeto de respuesta
      await cartService.addToCart(userId, productId, quantity);
      const response = await cartService.getCartItems();
      setCart(response.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const user = await userService.getUserProfile(); // Obtener el perfil de usuario que incluye el ID
      const userId = user.data.id; // Obtener el ID de usuario del objeto de respuesta
      await cartService.removeFromCart(userId, productId);
      const response = await cartService.getCartItems();
      setCart(response.data);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateCartItemQuantity = async (productId, quantity) => {
    try {
      const user = await userService.getUserProfile(); // Obtener el perfil de usuario que incluye el ID
      const userId = user.data.id; // Obtener el ID de usuario del objeto de respuesta
      await cartService.updateCartItemQuantity(userId, productId, quantity);
      const response = await cartService.getCartItems();
      setCart(response.data);
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
    }
  };

  const clearCart = async () => {
    try {
      await cartService.clearCart();
      setCart([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItemQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Añadir la validación de PropTypes
CartProvider.propTypes = {
  children: PropTypes.node.isRequired, // Asegurar que 'children' esté presente y sea un nodo
};
