import { useState } from 'react';

const FaqsPage = () => {
  const faqs = [
    {
      question: "¿Qué es SouthPrint3D?",
      answer: "SouthPrint3D es una empresa dedicada a proporcionar tecnología de impresión 3D accesible y de alta calidad a personas y empresas de todas las escalas."
    },
    {
      question: "¿Qué productos y servicios ofrecen?",
      answer: "Ofrecemos una amplia gama de impresiones 3D, diseñadas para uso, decoración, repuestos o reparaciones. También atendemos peticiones personalizadas para adaptarnos a tus necesidades específicas."
    },
    {
      question: "¿Cómo puedo ponerme en contacto con soporte?",
      answer: (
        <>
          <p className="text-gray-600 mb-2">Puedes contactarnos de las siguientes maneras:</p>
          <p className="text-gray-600 mb-2">Por teléfono: 744 43 32 56</p>
          <p className="text-gray-600 mb-2">Enviándonos un correo: <a href="mailto:southprint3d@gmail.com">southprint3d@gmail.com</a></p>
          <p className="text-gray-600 mb-2">Visitandonos en persona en: 37 Calle Platanito, Sevilla, España</p>
        </>
      )
    },
    {
      question: "¿Ofrecen envíos internacionales?",
      answer: "No, por ahora solo realizamos envíos en España."
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
