import api from './api';

const userService = {
  async getUsers(queryParams = {}, page = 1, perPage = 10) {
    try {
      const params = new URLSearchParams({ ...queryParams, page, perPage });
      const response = await api.get(`users?${params.toString()}`);
      return response;
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  },

  async getUserById(id) {
    try {
      const response = await api.get(`users/${id}`);
      return response;
    } catch (error) {
      throw new Error(`Error fetching user by ID: ${error.message}`);
    }
  },

  async updateUser(id, userData) {
    try {
      const response = await api.put(`users/${id}`, userData);
      return response;
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  },

  async createUser(userData) {
    try {
      const response = await api.post('users', userData);
      return response;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  },

  async deleteUser(id) {
    try {
      const response = await api.delete(`users/${id}`);
      return response;
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  },
};

export default userService;
