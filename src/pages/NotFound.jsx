import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStethoscope, faDroplet } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
      return (
            <div className="min-h-screen bg-gradient-to-br from-background to-card flex items-center justify-center px-6 md:px-10 lg:px-20">
                  <div className="max-w-4xl mx-auto text-center">
                        {/* 404 Number with IV Drip Animation */}
                        <div className="relative mb-8" data-aos="fade-down" data-aos-delay="100">
                              <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-primary opacity-20 select-none">
                                    404
                              </h1>

                              {/* IV Drip Icon Animation */}
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative">
                                          <FontAwesomeIcon
                                                icon={faDroplet}
                                                className="text-6xl md:text-7xl text-highlight animate-bounce"
                                                style={{ animationDelay: '0.5s' }}
                                          />
                                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-secondary"></div>
                                          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-primary rounded-t-lg"></div>
                                    </div>
                              </div>
                        </div>

                        {/* Error Message */}
                        <div className="mb-8" data-aos="fade-up" data-aos-delay="300">
                              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                                    Oops! Page Not Found
                              </h2>
                              <p className="text-lg md:text-xl text-secondary mb-6 max-w-2xl mx-auto">
                                    Looks like this page got lost in paradise! Don't worry, we'll help you get back on track to feeling your best in Bali.
                              </p>
                              <p className="text-base md:text-lg text-secondary/80">
                                    The page you're looking for might have been moved, deleted, or doesn't exist.
                              </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" data-aos="fade-up" data-aos-delay="500">
                              <Link
                                    to="/"
                                    className="flex items-center gap-3 px-8 py-4 bg-highlight text-secondary rounded-full font-bold hover:bg-highlight-secondary transition-all duration-300 transform hover:scale-105 shadow-lg"
                              >
                                    <FontAwesomeIcon icon={faHome} />
                                    Back to Home
                              </Link>

                              <Link
                                    to="/products"
                                    className="flex items-center gap-3 px-8 py-4 bg-primary text-background rounded-full font-bold hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg"
                              >
                                    <FontAwesomeIcon icon={faStethoscope} />
                                    View Our Services
                              </Link>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="700">
                              <div className="bg-surface p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                                          <FontAwesomeIcon icon={faDroplet} className="text-2xl text-secondary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-2">Quick Recovery</h3>
                                    <p className="text-secondary text-sm">Fast IV drip treatments for Bali belly and hangovers</p>
                              </div>

                              <div className="bg-surface p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                          <FontAwesomeIcon icon={faStethoscope} className="text-2xl text-background" />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-2">Expert Care</h3>
                                    <p className="text-secondary text-sm">Professional medical staff with premium treatments</p>
                              </div>

                              <div className="bg-surface p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                                          <span className="text-2xl font-bold text-secondary">24/7</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-2">Always Available</h3>
                                    <p className="text-secondary text-sm">Round-the-clock service for your convenience</p>
                              </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-20 left-10 w-20 h-20 bg-highlight/20 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute top-1/2 left-5 w-12 h-12 bg-secondary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>
            </div>
      );
}

export default NotFound;
