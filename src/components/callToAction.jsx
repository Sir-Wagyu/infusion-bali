import React from "react";

function CallToAction() {
      return (
            <section id="contact" className="w-full py-15 lg:py-20  px-6 md:px-10 lg:px-20 text-white bg-primary rounded-xl flex flex-col items-center text-center">
                  <h2 className="text-lg lg:text-xl mb-2">Ready to Get Started?</h2>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-10 text-highlight">Book Your Appointment Today</h1>
                  <p className="text-lg lg:text-xl mb-8 text-center">Experience the best care tailored to your needs.</p>
                  <button className=" bg-highlight text-secondary font-bold py-3 px-10 rounded-full shadow-lg hover:bg-opacity-80  duration-300 hover:bg-highlight-secondary active:scale-95 transition-all">
                        Book Now
                  </button>
            </section>
      )
}

export default CallToAction;