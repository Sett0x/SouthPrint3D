const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Quiénes somos</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nuestra Historia</h2>
        <p className="text-gray-600">
          En SouthPrint3D, nos enorgullece ser una empresa dedicada a la impresión 3D, especializada en proporcionar soluciones personalizadas para uso, decoración, repuestos y reparaciones. Comenzamos con la visión de hacer accesible esta tecnología innovadora a todos, ofreciendo productos de alta calidad y un servicio excepcional.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nuestra Misión</h2>
        <p className="text-gray-600">
          Nuestra misión es facilitar la impresión 3D de manera accesible y efectiva para nuestros clientes. Nos comprometemos a proporcionar soluciones que satisfagan las necesidades individuales y empresariales, con un enfoque en la innovación y la calidad.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nuestra Visión</h2>
        <p className="text-gray-600">
          Visualizamos un futuro donde la impresión 3D sea una herramienta esencial en cada hogar y empresa, promoviendo una fabricación personalizada, sostenible y eficiente. Nos esforzamos por liderar este camino mediante la innovación continua y la adaptación a las necesidades cambiantes del mercado.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nuestros Valores</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li><span className="font-bold text-gray-700">Innovación:</span> Siempre estamos explorando nuevas formas de mejorar y expandir nuestras soluciones en impresión 3D.</li>
          <li><span className="font-bold text-gray-700">Calidad:</span> Nos comprometemos a ofrecer productos y servicios de la más alta calidad para satisfacer las expectativas de nuestros clientes.</li>
          <li><span className="font-bold text-gray-700">Servicio al Cliente:</span> Nuestro equipo está dedicado a proporcionar una experiencia excepcional, asegurando que cada cliente reciba atención personalizada y oportuna.</li>
          <li><span className="font-bold text-gray-700">Sostenibilidad:</span> Valoramos la sostenibilidad y buscamos minimizar nuestro impacto ambiental en todas las etapas de nuestro proceso.</li>
          <li><span className="font-bold text-gray-700">Colaboración:</span> Creemos en la importancia de colaborar estrechamente con nuestros clientes para entender y satisfacer sus necesidades de manera efectiva.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Únete a Nosotros</h2>
        <p className="text-gray-600">
          Si compartes nuestra pasión por la impresión 3D y estás interesado en colaborar con un equipo dedicado y orientado a la innovación, ¡nos encantaría saber de ti!
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
