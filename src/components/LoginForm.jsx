import { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Importamos Navigate desde react-router-dom
import loginService from '../services/loginService';

const LoginForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginService.login(usernameOrEmail, password);
      // Guardar el token JWT y el ID del usuario en el localStorage
      localStorage.setItem('token', token);
      setSuccess(true);
      setError(null); // Limpiar cualquier error previo en caso de éxito
    } catch (error) {
      setError(error.message);
      setSuccess(false); // Asegurarse de que no haya éxito si hay un error
    }
  };

  // Si el inicio de sesión es exitoso, redirige al usuario a la página principal ("/")
  if (success) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="usernameOrEmail" className="block text-gray-600 mb-1">Username or Email:</label>
          <input
            type="text"
            id="usernameOrEmail"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-600 mb-1">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
