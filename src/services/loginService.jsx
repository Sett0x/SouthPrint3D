import api from './api';

const loginService = {
  async login(usernameOrEmail, password) {
    try {
      const response = await api.post('login', { usernameOrEmail, password });
      return response;
    } catch (error) {
      // Personaliza el mensaje de error solo para el inicio de sesión
      if (error.message === 'Failed to post data') {
        throw new Error('Failed to login. Please check your credentials and try again.');
      } else {
        // Re-lanza cualquier otro error sin modificarlo
        throw error;
      }
    }
  },
};

export default loginService;
