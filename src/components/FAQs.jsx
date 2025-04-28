import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of water solutions do you offer?",
      answer: "We offer a comprehensive range of water solutions including solar-powered water purification systems, water pumps, filtration systems, and irrigation solutions. Our products are specifically designed for farmers and rural communities, focusing on reliability and cost-effectiveness."
    },
    {
      question: "How long does the installation process take?",
      answer: "The installation timeline varies depending on the system complexity and site conditions. Typically, basic installations take 1-2 days, while more complex systems might require 3-5 days. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "Do you provide maintenance services?",
      answer: "Yes, we offer regular maintenance services and emergency repairs. Our maintenance packages include quarterly check-ups, filter replacements, and system optimization. We also provide 24/7 emergency support for critical issues."
    },
    {
      question: "What are the payment options available?",
      answer: "We accept various payment methods including credit cards, bank transfers, and installment plans. For larger projects, we also offer flexible financing options and can help you explore available rural development grants."
    },
    {
      question: "Are your systems environmentally friendly?",
      answer: "Absolutely! Our systems are designed with sustainability in mind. We primarily use solar power, implement water-saving technologies, and ensure all components are eco-friendly. Our solutions help reduce carbon footprint while maximizing water efficiency."
    },
    {
      question: "What areas do you service?",
      answer: "We currently service all rural and agricultural areas within a 200-mile radius of our main office. For locations outside this range, please contact us for special arrangements. We're continuously expanding our service area to reach more communities."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 pt-28 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-blue-600">Find answers to common questions about our water solutions and services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50 transition-colors"
              >
                <span className="font-medium text-blue-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-500 h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-blue-500 h-5 w-5 flex-shrink-0" />
                )}
              </button>
              
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 py-4 opacity-100'
                    : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-600 mb-4">Still have questions?</p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQs;