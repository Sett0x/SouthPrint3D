import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import OrderHistory from '../components/OrderHistory';

const ProfilePage = () => {
    const [redirectToLogin] = useState(false); // Quitamos setRedirectToLogin ya que no lo usamos


    // Si redirectToLogin es true, redirige a la página de inicio de sesión
    if (redirectToLogin) {
        return <Navigate to="/login" replace={true} />;
    }

    return (
      <div className='container mx-auto py-8 px-8'>
          <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg mb-4">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">Perfil</h1>
              <UserProfile />
          </div>
          <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Historial de Pedidos</h2>
              <OrderHistory />
          </div>
      </div>
  );
  
};

export default ProfilePage;
