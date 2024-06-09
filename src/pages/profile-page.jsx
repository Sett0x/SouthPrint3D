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
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Profile Page</h1>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Role: {user.role}</p>
          {/* Otros detalles del perfil que quieras mostrar */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Address</h2>
            <p>Street: {user.address.street}</p>
            <p>Number: {user.address.number}</p>
            <p>City: {user.address.city}</p>
            <p>Province: {user.address.province}</p>
            <p>State: {user.address.state}</p>
            <p>Zipcode: {user.address.zipcode}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
