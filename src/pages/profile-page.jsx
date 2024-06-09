import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import userService from '../services/userService';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await userService.getUserProfile();
        setUser(userProfile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        // Establece redirectToLogin a true si hay un error al obtener el perfil
        setRedirectToLogin(true);
      }
    };

    fetchUserProfile();
  }, []);

  // Si redirectToLogin es true, redirige a la página de inicio de sesión
  if (redirectToLogin) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Perfil</h1>
      {user && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Información del usuario</h2>
          <p>Usuario: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Teléfono: {user.phone}</p>
          {/*<p>Role: {user.role}</p>
          {/* Otros detalles del perfil que quieras mostrar */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Dirección</h2>
            <p>Calle: {user.address.street}</p>
            <p>Número: {user.address.number}</p>
            <p>Ciudad: {user.address.city}</p>
            <p>Provincia: {user.address.province}</p>
            <p>Estado: {user.address.state}</p>
            <p>Codigo postal: {user.address.zipcode}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
