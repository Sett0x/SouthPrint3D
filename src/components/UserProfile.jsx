import { useEffect, useState } from 'react';
import userService from '../services/userService';

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userProfile = await userService.getUserProfile();
                setUser(userProfile);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                // Podrías mostrar un mensaje de error al usuario aquí si lo deseas
            }
        };
        fetchUserProfile();
    }, []);

    if (!user) {
        return <div>Cargando perfil...</div>; // Muestra un indicador de carga mientras se obtiene el perfil
    }

    return (
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
        </div>
    );
};

export default UserProfile;
