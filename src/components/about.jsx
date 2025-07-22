import React from 'react';

function About() {
      return (
            <>
                  <section id="about" className="w-full pb-12 pt-10 lg:py-15 px-6 md:px-10 2xl:px-20  bg-primary text-surface rounded-xl flex flex-col lg:flex-row items-center center gap-10" data-aos="fade-right" data-aos-delay="150">
                        <div className='w-full lg:hidden text-center'>
                              <h2 className='text-lg lg:text-xl text-center mb-2 bg-highlight w-max mx-auto rounded-full px-4 text-secondary'>About Infusion Bali</h2>
                              <h1 className='text-4xl lg:text-5xl font-bold'>Who We Are?</h1>
                        </div>
                        <div className='bg-white w-full lg:w-[40%] 2xl:w-[50%] flex flex-col items-center text-center aspect-[6/5] max-w-xl rounded-lg overflow-hidden'>
                              <img src="about.png" alt="about image" className='w-full h-full object-cover' />
                        </div>
                        <div className=' w-full lg:w-[60%] 2xl:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left py-4 px-8 rounded-lg'>
                              <h2 className='text-lg lg:text-xl text-center mb-3 lg:mb-5 hidden lg:block bg-highlight w-max px-5 font-medium     text-secondary'>About Infusion Bali</h2>
                              <h1 className='text-4xl lg:text-5xl font-bold mb-12  hidden lg:block'>Who We Are?</h1>
                              <p className='text-xl '>
                                    Infusion Bali is your personalized wellness journey. Whether you’re seeking hydration, immune, support, or specific nutrients, we can customize each session to align with your health goals. It’s a tailored solution for peak physical and mental performance.
                              </p>
                        </div>
                  </section>
                  <div className='flex flex-wrap mt-10 bg-primary text-surface lg:w-[70%] mx-auto py-6 md:px-15 lg:px-40 rounded-xl md:rounded-full  items-center justify-center lg:justify-between gap-10' data-aos="zoom-in" data-aos-delay="50">
                        <div className='text-center order-3'>
                              <h3 className='text-3xl font-bold mb-2 text-highlight'>10.000+</h3>
                              <p className='text-lg lg:text-xl font-semibold'>Happy Patients</p>
                        </div>
                        <div className='text-center'>
                              <h3 className='text-3xl font-bold mb-2 text-highlight'>10+</h3>
                              <p className='text-lg lg:text-xl font-semibold'>IV Drips Formulations</p>
                        </div>
                        <div className='text-center'>
                              <h3 className='text-3xl font-bold mb-2 text-highlight'>500+</h3>
                              <p className='text-lg lg:text-xl font-semibold'>Positive Reviews</p>
                        </div>
                  </div>
                  {/* <div className='flex flex-wrap justify-center items-center gap-10 mt-10 bg-primary text-surface lg:w-[70%] mx-auto py-6 md:px-15 lg:px-40 '>
                        <div className='text-center'>
                              <h3 className='text-3xl font-bold mb-2 text-highlight'>10.000+</h3>
                              <p className='text-lg lg:text-xl font-semibold'>Happy Patients</p>
                        </div>
                        <div className='text-center'>
                              <h3 className='text-3xl font-bold mb-2 text-highlight'>10+</h3>
                              <p className='text-lg lg:text-xl font-semibold'>IV Drips Formulations</p>
                        </div>
                        <div className='text-center'>
                              <h3 className='text-3xl font-bold mb-2 text-highlight'>500+</h3>
                              <p className='text-lg lg:text-xl font-semibold'>Positive Reviews</p>
                        </div>
                  </div> */}
            </>
      );
}

export default About;