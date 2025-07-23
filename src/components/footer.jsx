import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { locations } from "../data/allDatas";
import React, { useState } from "react";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
      const [activeLocation, setActiveLocation] = useState('ubud');


      const buttonLocation = (locationName) => {
            const locationNameCapitalized = locationName.charAt(0).toLowerCase() + locationName.slice(1);
            return (
                  <button
                        className={`py-3 px-3 lg:px-7 lg:w-full h-full lg:rounded-full font-semibold lg:shadow-lg group flex flex-col lg:flex-row items-center justify-center transition-all duration-300 lg:gap-3 ${activeLocation === locationNameCapitalized
                              ? 'text-primary lg:bg-primary lg:text-surface border-b-2 border-primary'
                              : 'text-secondary lg:bg-surface lg:text-primary hover:bg-primary hover:text-surface'
                              }`}
                        onClick={() => handleLocationChange(locationNameCapitalized)}
                  >
                        <span className="hidden lg:block">
                              <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className={`text-3xl lg:text-lg py-2 px-3 rounded-full transition-colors duration-300 ${activeLocation === locationNameCapitalized
                                          ? 'bg-surface text-primary'
                                          : 'bg-primary text-surface group-hover:bg-surface group-hover:text-primary'
                                          }`}
                              />
                        </span>
                        <span className="font-bold">{locationNameCapitalized}</span>
                  </button>
            )
      };
      const handleLocationChange = (locationKey) => {
            setActiveLocation(locationKey);
      };
      return (
            <>
                  <footer id="footer" className="w-full py-20 px-6 md:px-10 lg:px-20 xl:px-40 bg-surface text-secondary">
                        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">Here Our Locations</h1>
                        <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-6 justify-between items-start">
                              <div className="w-full lg:w-[20%] space-y-5 flex flex-row lg:flex-col justify-center gap-3">

                                    {buttonLocation('Ubud')}
                                    {buttonLocation('Berawa')}
                                    {buttonLocation('Canggu')}
                              </div>
                              <div className="w-full lg:w-[75%] bg-surface rounded-lg p-3 lg:p-6 shadow-lg">
                                    <div className="mb-4">
                                          <h3 className="text-xl font-semibold text-primary">
                                                {locations[activeLocation].name} Location
                                          </h3>
                                    </div>
                                    <iframe
                                          className="w-full min-h-100 rounded-lg transition-opacity duration-300"
                                          src={locations[activeLocation].embedUrl}
                                          allowFullScreen=""
                                          loading="lazy"
                                          referrerPolicy="no-referrer-when-downgrade"
                                          title={`${locations[activeLocation].name} Location Map`}
                                    />
                              </div>
                        </div>
                  </footer>
                  <footer className="bg-secondary pt-15 lg:pt-20 px-6 md:px-10 lg:px-20 xl:px-40 text-surface flex flex-col items-center justify-center">
                        <img src="logo.png" alt="logo" className="size-25 lg:size-30" />
                        <h3 className="font-family-montserrat font-bold text-xl lg:text-2xl mt-6"><span className="text-[#FFDE5B]">INFUSION</span> BALI</h3>
                        <p className="text-sm mt-2">SPECIALLY FORMULATED INTRAVENOUS INFUSION</p>
                        <div className="flex gap-4 mt-4 ">
                              <div className="size-12 bg-primary rounded-full flex items-center justify-center hover:bg-highlight hover:text-secondary transition-colors duration-200">
                                    <FontAwesomeIcon icon={faWhatsapp} className="ml-1 text-3xl" />
                              </div>
                              <div className="size-12 bg-primary rounded-full flex items-center justify-center hover:bg-highlight hover:text-secondary transition-colors duration-200">
                                    <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                              </div>
                        </div>
                        <div className="mt-10 ">
                              <h3 className="text-lg font-semibold">Our Pages</h3>
                              <div className="flex gap-4 mt-3 text-center ">
                                    <a href="#" className="text-sm text-surface hover:text-highlight transition-colors duration-200">Home</a>
                                    <a href="#" className="text-sm text-surface hover:text-highlight transition-colors duration-200">Products</a>
                                    <a href="#" className="text-sm text-surface hover:text-highlight transition-colors duration-200">About Us</a>
                                    <a href="#" className="text-sm text-surface hover:text-highlight transition-colors duration-200">Contact</a>
                              </div>
                        </div>
                        <div className="mt-25 mb-4 container mx-auto text-center ">
                              <div className="w-full h-px bg-card/50 mb-4"></div>
                              <p className="text-sm">
                                    &copy; {new Date().getFullYear()} Infusion Bali. All rights reserved.
                              </p>
                        </div>
                  </footer>
            </>
      );
}

export default Footer;
