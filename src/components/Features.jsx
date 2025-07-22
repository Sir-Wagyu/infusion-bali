import React from "react";
import { featuresData } from "../data/allDatas";

function Features() {

      //feature card
      function FeatureCard({ image, title, description }) {
            return (
                  <div className="lg:w-[25%] flex flex-col items-center text-center group ">
                        <img src={image} alt={title} className="w-23 p-3 rounded-full shadow-md mb-4 group-hover:shadow-lg group-hover:shadow-highlight/50 transition-all" />
                        <h3 className="text-lg lg:text-xl font-bold mb-2 text-secondary">{title}</h3>
                        <p className="text-secondary mb-8">{description}</p>
                  </div>
            );
      }

      return (
            <section className="w-full py-20 lg:py-30 px-6 md:px-10 lg:px-20 xl:px-40 bg-surface text-secondary">
                  <h2 className="text-lg lg:text-xl text-center mb-2">Product Features</h2>
                  <h1 className="text-3xl lg:text-4xl font-bold text-center mb-15 lg:mb-18">Can It Really Help?</h1>
                  <div className=" flex flex-wrap items-center justify-center gap-8">
                        {featuresData.map((feature, index) => (

                              <FeatureCard key={index} {...feature} />
                        ))}
                  </div>

            </section>
      )
}

export default Features;