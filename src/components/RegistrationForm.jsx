import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Navigate y Link desde react-router-dom
import userService from '../services/userService';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    nombre: {
      name: '',
      lastname: ''
    },
    address: {
      state: '',
      province: '',
      city: '',
      zipcode: '',
      street: '',
      number: '',
      floor: '',
      apartment: ''
    }
  });

  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('nombre.') || name.includes('address.')) {
      const [field, subfield] = name.split('.');
      setFormData(prevState => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [subfield]: value
        }
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccessMessage('');

    try {
      await userService.createUser(formData);
      setSuccessMessage('Usuario registrado exitosamente');
      setFormData({
        username: '',
        password: '',
        email: '',
        phone: '',
        nombre: {
          name: '',
          lastname: ''
        },
        address: {
          state: '',
          province: '',
          city: '',
          zipcode: '',
          street: '',
          number: '',
          floor: '',
          apartment: ''
        }
      });
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([{ msg: error.message }]);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center"></h2>
      {errors.length > 0 && (
        <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-md">
          {errors.map((error, index) => (
            <p key={index}>{error.msg}</p>
          ))}
        </div>
      )}
      {successMessage && (
        <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-md">
          {successMessage}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Nombre de usuario</label>
        <input 
          type="text" 
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Contraseña</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
          required 
          minLength="6" 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Teléfono</label>
        <input 
          type="text" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
          required 
          minLength="9" 
          maxLength="15" 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Nombre</label>
        <input 
          type="text" 
          name="nombre.name" 
          value={formData.nombre.name} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Apellido</label>
        <input 
          type="text" 
          name="nombre.lastname" 
          value={formData.nombre.lastname} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
          required 
        />
      </div>

      <h3 className="text-xl font-semibold mb-4">Dirección</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Estado</label>
        <input 
          type="text" 
          name="address.state" 
          value={formData.address.state} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Provincia</label>
        <input 
          type="text" 
          name="address.province" 
          value={formData.address.province} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Ciudad</label>
        <input 
          type="text" 
          name="address.city" 
          value={formData.address.city} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Código Postal</label>
        <input 
          type="text" 
          name="address.zipcode" 
          value={formData.address.zipcode} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
          required 
          minLength="5" 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Calle</label>
        <input 
          type="text" 
          name="address.street" 
          value={formData.address.street} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Número</label>
        <input 
          type="number" 
          name="address.number" 
          value={formData.address.number} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Piso (opcional)</label>
        <input 
          type="text" 
          name="address.floor" 
          value={formData.address.floor} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Departamento (opcional)</label>
        <input 
          type="text" 
          name="address.apartment" 
          value={formData.address.apartment} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
        />
      </div>

      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Registrar
      </button>
      <div className="mt-4">
            <Link to="/login" className="block text-center text-blue-500 hover:underline">¿tienes cuenta? Inicia sesión aquí</Link>
          </div>
    </form>
  );
};

export default RegistrationForm;
