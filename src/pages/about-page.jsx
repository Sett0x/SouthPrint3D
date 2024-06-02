const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Quiénes somos</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nuestra Historia</h2>
        <p className="text-gray-600">
          En SouthPrint3D, comenzamos como un pequeño equipo de entusiastas de la impresión 3D con una gran visión: 
          hacer accesible esta increíble tecnología a personas y empresas de todas las escalas. Desde nuestros 
          humildes comienzos, hemos crecido hasta convertirnos en un líder en el mercado, proporcionando productos 
          de alta calidad y soluciones innovadoras a nuestros clientes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nuestra Misión</h2>
        <p className="text-gray-600">
          Nuestra misión es empoderar a los creadores y empresas con la tecnología de impresión 3D más avanzada 
          y accesible del mercado. Nos esforzamos por ofrecer productos de calidad y un servicio excepcional a 
          todos nuestros clientes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nuestra Visión</h2>
        <p className="text-gray-600">
          Imaginamos un futuro donde la impresión 3D sea una herramienta común en cada hogar y empresa, permitiendo 
          una fabricación personalizada, sostenible y eficiente. Queremos liderar el camino hacia ese futuro, 
          innovando continuamente y adaptándonos a las necesidades cambiantes de nuestros clientes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nuestros Valores</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li><span className="font-bold text-gray-700">Innovación:</span> Siempre estamos a la vanguardia de la tecnología, buscando nuevas maneras de mejorar y expandir nuestras ofertas.</li>
          <li><span className="font-bold text-gray-700">Calidad:</span> Nos comprometemos a ofrecer productos y servicios de la más alta calidad a nuestros clientes.</li>
          <li><span className="font-bold text-gray-700">Servicio al Cliente:</span> Nuestro equipo está dedicado a proporcionar una experiencia excepcional a cada cliente, asegurando que sus necesidades sean siempre atendidas.</li>
          <li><span className="font-bold text-gray-700">Sostenibilidad:</span> Valoramos la sostenibilidad y trabajamos para minimizar nuestro impacto ambiental en cada paso del proceso.</li>
          <li><span className="font-bold text-gray-700">Comunicación:</span> Creemos en la importancia de una comunicación clara y abierta, tanto dentro de nuestro equipo como con nuestros clientes.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Únete a Nosotros</h2>
        <p className="text-gray-600">
          Si compartes nuestra pasión por la impresión 3D y deseas formar parte de un equipo innovador y dinámico, 
          ¡nos encantaría saber de ti! Visita nuestra página de <a href="/careers" className="text-blue-500 hover:underline">carreras</a> para conocer las oportunidades disponibles.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
