import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import userService from '../services/userService';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userProfile = await userService.getUserProfile();
                setUser(userProfile);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setRedirectToLogin(true); // Establecer redirectToLogin en true si no hay sesión activa
            }
        };
        fetchUserProfile();
    }, []);

    // Si redirectToLogin es true, redirige a la página de inicio de sesión
    if (redirectToLogin) {
        return <Navigate to="/login" replace={true} />;
    }

    if (!user) {
        return <div>Cargando perfil...</div>; // Muestra un indicador de carga mientras se obtiene el perfil
    }

    return (
        <div className=' rounded-lg p-4 mt-4'>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Información del usuario</h2>
            <p>Usuario: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Teléfono: {user.phone}</p>
            {/* <p>ID: {user._id}</p>
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
        </div>
    );
};

export default UserProfile;
