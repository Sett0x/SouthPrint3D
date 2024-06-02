const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contáctanos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Información de Contacto</h2>
          <p className="text-gray-600 mb-2">Dirección: 123 Calle Principal, Ciudad, País</p>
          <p className="text-gray-600 mb-2">Teléfono: 744 43 32 56</p>
          <p className="text-gray-600 mb-2">Correo Electrónico: southprint3d@gmail.com</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Formulario de Contacto</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-1">Nombre</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">Correo Electrónico</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600 mb-1">Mensaje</label>
              <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enviar Mensaje</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
