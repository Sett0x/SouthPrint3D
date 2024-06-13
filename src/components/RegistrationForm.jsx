import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import userService from '../services/userService';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        street: '',
        number: '',
        zipcode: '',
        city: '',
        state: '',
        floor: '',
        apartment: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await userService.createUser(formData);
            setSuccess(true);
            setError(null);
        } catch (error) {
            setSuccess(false);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return <Navigate to="/login" replace={true} />;
    }

    return (
        <div className="container mx-auto py-8 px-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4"></h1>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <span className="block sm:inline">{error}</span>
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Nombre de Usuario</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-input mt-1 block w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Contraseña</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input mt-1 block w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Confirmar Contraseña</label>
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-input mt-1 block w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Correo Electrónico</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input mt-1 block w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Teléfono</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input mt-1 block w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Nombre</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input mt-1 block w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Apellido</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input mt-1 block w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Calle</label>
                        <input type="text" name="street" value={formData.street} onChange={handleChange} className="form-input mt-1 block w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Número</label>
                        <input type="text" name="number" value={formData.number} onChange={handleChange} className="form-input mt-1 block w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Código Postal</label>
                        <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} className="form-input mt-1 block w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Ciudad</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-input mt-1 block w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Provincia/Estado</label>
                        <input type="text" name="state" value={formData.state} onChange={handleChange} className="form-input mt-1 block w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Piso (opcional)</label>
                        <input type="text" name="floor" value={formData.floor} onChange={handleChange} className="form-input mt-1 block w-full" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Departamento (opcional)</label>
                        <input type="text" name="apartment" value={formData.apartment} onChange={handleChange} className="form-input mt-1 block w-full" />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none" disabled={loading}>
                        {loading ? 'Registrando...' : 'Registrarse'}
                    </button>
                    <Link to="/login" className="ml-2 text-blue-500 hover:underline">
                        Iniciar sesión
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
