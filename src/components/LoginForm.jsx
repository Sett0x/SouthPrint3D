// src/components/LoginForm.jsx
const LoginForm = () => {
    return (
      <div className="container mx-auto py-8">
        <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">E-mail</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Contraseña</label>
              <input type="password" className="w-full p-2 border rounded" />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
          </form>
          <div className="text-center mt-4">
            <a href="#" className="text-blue-500">¿Forgot your password?</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginForm;
  