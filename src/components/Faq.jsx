import React, { useState } from "react";
import { faqData } from "../data/allDatas";

function Faq() {

      // FAQ card
      function FaqCard({ question, answer, index }) {
            const [openIndex, setOpenIndex] = useState(null);

            const isOpen = openIndex === index;

            const handleToggle = () => {
                  setOpenIndex(isOpen ? null : index);
            };

            console.log(isOpen);

            return (
                  <div className={`bg-surface rounded-lg p-6 mb-4 transition-all duration-300 shadow-lg border border-transparent ${isOpen ? 'border-primary shadow-xl' : 'hover:shadow-xl cursor-pointer'
                        }`}>
                        <button
                              className="flex justify-between items-center font-medium cursor-pointer w-full text-left focus:outline-none"
                              onClick={handleToggle}
                        >
                              <span className={`font-semibold transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-secondary'
                                    }`}>{question}</span>
                              <span className={`transition-all duration-300 ease-in-out transform ${isOpen ? 'rotate-180 text-primary' : 'rotate-0 text-secondary'
                                    }`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                              </span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                              }`}>
                              <div className={`transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 pt-4' : '-translate-y-2'
                                    }`}>
                                    <p className="text-gray-600 leading-relaxed">{answer}</p>
                              </div>
                        </div>
                  </div>
            );
      }


      return (
            <section className="w-full py-20 lg:py-30 px-6 md:px-10 lg:px-20 xl:px-40 bg-background text-secondary">
                  <h2 className="text-lg lg:text-xl text-center mb-2">Frequently Asked Questions</h2>
                  <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">Have Any Questions?</h1>
                  <div className="max-w-4xl mx-auto">
                        {faqData.map((item, index) => (
                              <FaqCard
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                    index={index}
                              />
                        ))}
                  </div>
            </section>
      )
}


export default Faq;