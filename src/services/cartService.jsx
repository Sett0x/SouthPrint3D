import api from './api';

const cartService = {
  async addToCart(userId, productId, quantity) {
    try {
      const response = await api.post('cart/add', { userId, productId, quantity }, true);
      return response;
    } catch (error) {
      throw new Error(`Error adding product to cart: ${error.message}`);
    }
  },

  async removeFromCart(userId, productId) {
    try {
      const response = await api.post('cart/remove', { userId, productId }, true);
      return response;
    } catch (error) {
      throw new Error(`Error removing product from cart: ${error.message}`);
    }
  },

  async updateCartItemQuantity(userId, productId, quantity) {
    try {
      const response = await api.patch('cart/update', { userId, productId, quantity }, true);
      return response;
    } catch (error) {
      throw new Error(`Error updating cart item quantity: ${error.message}`);
    }
  },

  async getCartItems() {
    try {
      const response = await api.get('cart/items', true);
      return response;
    } catch (error) {
      throw new Error(`Error getting cart items: ${error.message}`);
    }
  },

  async clearCart() {
    try {
      const response = await api.delete('cart/clear', true);
      return response;
    } catch (error) {
      throw new Error(`Error clearing cart: ${error.message}`);
    }
  },

  async confirmOrder(userId, shippingAddress) {
    try {
      const response = await api.post('cart/confirm-order', { userId, shippingAddress }, true);
      return response;
    } catch (error) {
      throw new Error(`Error confirming order: ${error.message}`);
    }
  },
};

export default cartService;
