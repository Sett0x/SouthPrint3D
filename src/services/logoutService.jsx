//import api from './api';

const logoutService = {
  async logout() {
    try {
      // Realizar solicitud de cierre de sesión al backend
     // const response = await api.post('logout');

      // Borrar el token del localStorage al cerrar sesión
      localStorage.removeItem('token');

      // Devolver la respuesta del backend
      //return response;
    } catch (error) {
      throw new Error(`Error logging out: ${error.message}`);
    }
  },
};

export default logoutService;
