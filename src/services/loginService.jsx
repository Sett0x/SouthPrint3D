import api from './api';

const loginService = {
  async login(usernameOrEmail, password) {
    try {
      const response = await api.post('login', { usernameOrEmail, password });
      return response;
    } catch (error) {
      throw new Error(`Error logging in: ${error.message}`);
    }
  },
};

export default loginService;
