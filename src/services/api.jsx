const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const api = {
    get: async (endpoint) => {
      try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return await response.json();
      } catch (error) {
        console.error('API error:', error);
        throw error;
      }
    },
  
    post: async (endpoint, data) => {
      try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
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
  
    put: async (endpoint, data) => {
      try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
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
  
    delete: async (endpoint) => {
      try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
          method: 'DELETE',
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