import api from './api';

const userService = {
  async getUsers(queryParams = {}, page = 1, perPage = 10) {
    try {
      const params = new URLSearchParams({ ...queryParams, page, perPage });
      const response = await api.get(`users?${params.toString()}`, true); // Auth required
      return response;
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  },

  async getUserById(id) {
    try {
      const response = await api.get(`users/${id}`, true); // Auth required
      return response;
    } catch (error) {
      throw new Error(`Error fetching user by ID: ${error.message}`);
    }
  },

  async getUserProfile() {
    try {
      const response = await api.get('users/me', true); // Auth required
      return response;
    } catch (error) {
      throw new Error(`Error fetching user profile: ${error.message}`);
    }
  },

  async updateUser(id, userData) {
    try {
      const response = await api.patch(`users/${id}`, userData, true); // Auth required
      return response;
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  },

  async createUser(userData) {
    try {
      const response = await api.post('users/register', userData);
      return response;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  },

  async deleteUser(id) {
    try {
      const response = await api.delete(`users/${id}`, true); // Auth required
      return response;
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  },

  async getCart() {
    try {
      const response = await api.get(`users/cart`, true); // Auth required to fetch user's cart
      return response;
    } catch (error) {
      throw new Error(`Error fetching cart: ${error.message}`);
    }
  },
  

  async addItemToCart(productId) {
    try {
      const response = await api.post(`users/cart/add/${productId}`, {}, true); // Auth required
      return response;
    } catch (error) {
      throw new Error(`Error adding item to cart: ${error.message}`);
    }
  },

  async removeItemFromCart(productId) {
    try {
      const response = await api.delete(`users/cart/remove/${productId}`, true); // Auth required
      return response;
    } catch (error) {
      throw new Error(`Error removing item from cart: ${error.message}`);
    }
  },

  async clearCart() {
    try {
      const response = await api.delete(`users/cart/clear`, true); // Auth required
      return response;
    } catch (error) {
      throw new Error(`Error clearing cart: ${error.message}`);
    }
  },

  async confirmOrder() {
    try {
      const response = await api.post(`users/cart/confirm`, {}, true); // Auth required
      return response;
    } catch (error) {
      throw new Error(`Error confirming order: ${error.message}`);
    }
  },

  async getOrderHistory() {
    try {
      const response = await api.get(`users/getOrders`, true); // Auth required
      return response;
    } catch (error) {
      throw new Error(`Error fetching order history: ${error.message}`);
    }
  }
};

export default userService;
