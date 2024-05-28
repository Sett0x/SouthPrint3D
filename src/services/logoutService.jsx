import api from './api';

const logoutService = {
  async logout() {
    try {
      const response = await api.post('logout');
      return response;
    } catch (error) {
      throw new Error(`Error logging out: ${error.message}`);
    }
  },
};

export default logoutService;
