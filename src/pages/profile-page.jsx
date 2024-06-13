import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import userService from '../services/userService';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await userService.getUserProfile();
        setUser(userProfile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setRedirectToLogin(true);
      }
    };

    const fetchOrderHistory = async () => {
      try {
        const orders = await userService.getOrderHistory();
        setOrderHistory(orders);
      } catch (error) {
        console.error('Error fetching order history:', error);
        setRedirectToLogin(true);
      }
    };

    fetchUserProfile();
    fetchOrderHistory();
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
          <p>ID: {user._id}</p>
          {/* Otros detalles del perfil que quieras mostrar */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Dirección</h2>
            <p>Calle: {user.address.street}</p>
            <p>Número: {user.address.number}</p>
            <p>Ciudad: {user.address.city}</p>
            <p>Provincia: {user.address.province}</p>
            <p>Estado: {user.address.state}</p>
            <p>Código postal: {user.address.zipcode}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Historial de Pedidos</h2>
            {orderHistory.length > 0 ? (
              orderHistory.map(order => (
                <div key={order._id} className="border rounded-lg p-4 mt-4">
                  <p>ID de Pedido: {order._id}</p>
                  <p>Fecha: {new Date(order.createdAt).toLocaleDateString()}</p>
                  <p>Total: ${order.totalPrice.toFixed(2)}</p>
                  <ul className="list-disc list-inside">
                    {order.products.map(product => (
                      <li key={product._id}>{product.productName} - ${product.price.toFixed(2)}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>No hay historial de pedidos disponible.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
