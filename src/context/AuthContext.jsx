import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes
import userService from '../services/userService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await userService.getUserProfile();
        setAuthenticated(true);
      } catch (error) {
        console.error('User not authenticated:', error);
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Añadir validación de los props
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
