// orderService.jsx

import api from './api';

const orderService = {
  async getUserOrders(userId, filters = {}, page = 1, perPage = 10) {
    try {
      const params = new URLSearchParams({ ...filters, page, perPage });
      const response = await api.get(`orders/user/${userId}?${params.toString()}`);
      return response;
    } catch (error) {
      throw new Error(`Error fetching user orders: ${error.message}`);
    }
  },

  async createOrder(userId, products, shippingAddress) {
    try {
      const response = await api.post('orders', { userId, products, shippingAddress });
      return response;
    } catch (error) {
      throw new Error(`Error creating order: ${error.message}`);
    }
  },

  async getOrderById(orderId) {
    try {
      const response = await api.get(`orders/${orderId}`);
      return response;
    } catch (error) {
      throw new Error(`Error fetching order by ID: ${error.message}`);
    }
  },

  async updateOrderStatus(orderId, status) {
    try {
      const response = await api.put(`orders/${orderId}/status`, { status });
      return response;
    } catch (error) {
      throw new Error(`Error updating order status: ${error.message}`);
    }
  },

  async searchOrders(userId, query, page = 1, perPage = 10) {
    try {
      const response = await api.get(`orders/search?userId=${userId}&query=${query}&page=${page}&perPage=${perPage}`);
      return response;
    } catch (error) {
      throw new Error(`Error searching orders: ${error.message}`);
    }
  },

  async deleteOrder(orderId) {
    try {
      const response = await api.delete(`orders/${orderId}`);
      return response;
    } catch (error) {
      throw new Error(`Error deleting order: ${error.message}`);
    }
  },
};

export default orderService;
