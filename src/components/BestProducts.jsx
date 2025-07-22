import React from "react";
import { bestProducts } from "../data/allDatas";


function BestProducts() {
      function ProductCard({ name, description, image, whatsappMessage }) {
            return (
                  <div className="bg-surface px-4 py-6 rounded-xl shadow-md aspect-[4/3]">
                        <img src={image} alt={name} className="aspect-[6/5] object-cover rounded-t-xl mb-4 bg-card" />
                        <h3 className="text-xl font-semibold mb-2 text-secondary">{name}</h3>
                        <p className="text-secondary mb-8 line-clamp-2">{description}</p>
                        <a href={whatsappMessage} className="w-full block text-center px-4 py-2 bg-highlight text-secondary rounded-full hover:bg-highlight-secondary transition-all font-semibold">Contact Us</a>
                  </div>
            )
      }

      return (
            <section className="w-full py-20 lg:py-30  px-6 md:px-10 lg:px-20 xl:px-40 bg-primary text-background">
                  <h2 className="text-lg lg:text-xl text-center mb-2">Our Products</h2>
                  <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">Special Services For You</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {bestProducts.map((product, index) => (
                              <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                                    <ProductCard
                                          name={product.name}
                                          description={product.description}
                                          image={product.image}
                                          whatsappMessage={product.whatsappMessage}
                                    />
                              </div>
                        ))}
                  </div>
                  <div className="text-center mt-14" data-aos="fade-up" data-aos-delay="500">
                        <a href="/products" className="inline-block px-10 py-3 lg:w-[20%] bg-highlight text-secondary rounded-full hover:bg-highlight-secondary transition-all font-bold">View More Products</a>
                  </div>
            </section>
      );
}

export default BestProducts;