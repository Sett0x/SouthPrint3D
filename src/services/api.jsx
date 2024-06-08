const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getToken = () => localStorage.getItem('token');

const api = {
  get: async (endpoint, authRequired = false) => {
    try {
      const headers = authRequired ? { 'Authorization': `Bearer ${getToken()}` } : {};
      const response = await fetch(`${BASE_URL}/${endpoint}`, { headers });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  },

  post: async (endpoint, data, authRequired = false) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        ...(authRequired && { 'Authorization': `Bearer ${getToken()}` }),
      };
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to post data');
      }
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  },

  put: async (endpoint, data, authRequired = false) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        ...(authRequired && { 'Authorization': `Bearer ${getToken()}` }),
      };
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  },

  patch: async (endpoint, data, authRequired = false) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        ...(authRequired && { 'Authorization': `Bearer ${getToken()}` }),
      };
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  },

  delete: async (endpoint, authRequired = false) => {
    try {
      const headers = authRequired ? { 'Authorization': `Bearer ${getToken()}` } : {};
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'DELETE',
        headers,
      });
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  },
};

export default api;
