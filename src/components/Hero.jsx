import React from "react";

function Hero() {
      return (
            <section className="w-full h-screen flex justify-center items-center px-6 md:px-10 lg:px-20 xl:px-40 gap-20 bg-primary">

                  <div className="isset absolute inset-0 blur-xs">
                        <img src="hero.png" alt="Hero" className="w-full h-full object-cover rounded-lg shadow-lg" />
                  </div>
                  {/* overlay */}
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="relative z-10 w-full h-full flex justify-between items-center">
                        <div className="w-full md:w-[70%]  flex flex-col justify-center items-center md:items-start text-center md:text-left lg:mt-40">
                              <h1
                                    className="text-5xl lg:text-6xl font-bold text-background mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                              >
                                    Feeling Sick in Paradise?
                              </h1>
                              <p
                                    className="text-lg lg:text-xl text-card mb-8 w-[80%]"
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                              >
                                    Our premium IV drips cure Bali Belly, hangovers, and boost your immunity fast. Don't let anything ruin your Bali adventure!
                              </p>
                              <a
                                    href="#bestProd"
                                    className="mt-6 px-8 py-3 bg-highlight text-secondary rounded-full w-max font-bold hover:bg-highlight-secondary transition-all"
                                    data-aos="fade-up"
                                    data-aos-delay="700"
                              >
                                    Get Recovery Now
                              </a>
                        </div>
                        <div className="hidden md:block">

                        </div>
                  </div>
            </section>
      )
}

export default Hero;
