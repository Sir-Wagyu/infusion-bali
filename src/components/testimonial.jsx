import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { testimonialsData } from "../data/allDatas";
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonial() {

      const testimonialCard = (image, name, feedback) => {
            return (
                  <div className="bg-white px-6 py-10 rounded-lg shadow-xl h-100 xl:h-130 flex flex-col items-center justify-between">
                        <p className="text-lg lg:text-xl mb-4 text-center">
                              "{feedback}"
                        </p>
                        <div className="flex flex-col items-center">
                              <img src={image} alt="" className="size-18 lg:size-20 rounded-full" />
                              <h3 className="text-xl font-semibold mt-4">{name}</h3>
                        </div>
                  </div>
            );
      }

      return (
            <section className="w-full py-20 lg:py-40 px-6 md:px-10 lg:px-20 text-secondary rounded-xl flex flex-col items-center">
                  <h2 className="text-lg lg:text-xl mb-2">Testimonials</h2>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-10 text-center">What Our Patients Says About Us</h1>
                  <div className="w-full lg:w-3/4 py-5 ">
                        <Swiper
                              modules={[Pagination, Autoplay]}
                              spaceBetween={30}
                              slidesPerView={1}

                              pagination={{ clickable: true }}
                              autoplay={{ delay: 3000 }}
                              breakpoints={{
                                    768: {
                                          slidesPerView: 2,
                                    },
                                    1024: {
                                          slidesPerView: 3,
                                    },
                              }}
                        >
                              {testimonialsData.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                          {testimonialCard(
                                                testimonial.image,
                                                testimonial.name,
                                                testimonial.feedback
                                          )}
                                    </SwiperSlide>
                              ))}
                        </Swiper>
                  </div>
            </section>
      )
}


export default Testimonial;