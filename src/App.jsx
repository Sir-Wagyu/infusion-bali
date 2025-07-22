import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Headers'
import Hero from './components/Hero'
import BestProducts from './components/BestProducts'
import Features from './components/Features'
import About from './components/about'
import Testimonial from './components/testimonial'
import CallToAction from './components/callToAction'
import Faq from './components/Faq'
import Footer from './components/footer'
import AllProducts from './components/allProducts'

function App() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 800,           // Durasi animasi lebih pendek
            easing: 'ease-out-cubic', // Easing yang lebih natural// Animasi hanya terjadi sekali
            offset: 120,             // Offset lebih besar agar animasi dimulai saat element terlihat
            delay: 0,                // Hapus global delay
            anchorPlacement: 'top-bottom', // Animasi dimulai saat top element menyentuh bottom viewport
            disable: false           // Enable di semua device
        });

        // Refresh AOS saat route berubah
        return () => {
            AOS.refresh();
        };
    }, []);

    // Component untuk homepage
    const HomePage = () => {
        return (
            <>
                <Hero />
                <BestProducts />

                <div data-aos="fade-up" data-aos-delay="100">
                    <Features />
                </div>
                <About />

                <div data-aos="zoom-in" data-aos-delay="100">
                    <Testimonial />
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <CallToAction />
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <Faq />
                </div>
            </>
        )
    }

    // Component untuk products page
    const ProductsPage = () => {
        return (
            <div className="pt-20" data-aos="fade-in"> {/* Padding untuk header yang fixed */}
                <AllProducts />
            </div>
        )
    }

    return (
        <Router>
            <div className='min-h-screen font-jakarta bg-background'>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
