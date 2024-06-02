import { useState } from 'react';

const FaqsPage = () => {
  const faqs = [
    {
      question: "¿Qué es SouthPrint3D?",
      answer: "SouthPrint3D es una empresa dedicada a proporcionar tecnología de impresión 3D accesible y de alta calidad a personas y empresas de todas las escalas."
    },
    {
      question: "¿Qué productos ofrecen?",
      answer: "Ofrecemos una variedad de impresoras 3D, filamentos y accesorios, así como servicios de impresión 3D personalizados."
    },
    {
      question: "¿Cómo puedo ponerme en contacto con soporte?",
      answer: "Puedes ponerte en contacto con nuestro equipo de soporte a través de la página de contacto en nuestro sitio web o enviando un correo electrónico a soporte@southprint3d.com."
    },
    {
      question: "¿Ofrecen envíos internacionales?",
      answer: "Sí, realizamos envíos internacionales a muchos países. Por favor, consulta nuestras políticas de envío para más detalles."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos una variedad de métodos de pago, incluidos tarjetas de crédito, PayPal y transferencias bancarias."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Preguntas Frecuentes</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-200">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left py-4 focus:outline-none"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium text-gray-800">{faq.question}</h2>
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </div>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsPage;
