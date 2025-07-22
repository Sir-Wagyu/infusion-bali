
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Add this hook after the useState
    const location = useLocation();

    useEffect(() => {
        const header = document.querySelector('header');
        console.log('Header element:', header);

        // If on products page, always show background
        if (location.pathname === '/products') {
            header.classList.add('bg-primary');
            return;
        }

        function handleShowBackground() {
            window.scrollY > 10 ? header.classList.add('bg-primary') : header.classList.remove('bg-primary');
        }

        // Remove bg-primary first in case it was added by products page
        header.classList.remove('bg-primary');

        // Initial check
        handleShowBackground();

        window.addEventListener('scroll', handleShowBackground);

        return () => {
            window.removeEventListener('scroll', handleShowBackground);
            // Clean up background when component unmounts
            if (location.pathname !== '/products') {
                header.classList.remove('bg-primary');
            }
        };
    }, [location.pathname]);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-toggle')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Function for smooth scrolling to sections
    const smoothScrollTo = (sectionId) => {
        // If not on home page, navigate to home first
        if (location.pathname !== '/') {
            navigate('/');
            // Use setTimeout to wait for navigation to complete
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }, 100);
        } else {
            // If already on home page, just scroll
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    useEffect(() => {
        // Scroll to top when route changes
        goTop();
    }, [location]);



    return (
        <>
            <header className="fixed left-0 right-0 top-0 z-50 px-6 md:px-10 lg:px-20 xl:px-40 gap-20 text-background py-4 flex items-center justify-between transition-all">
                <Link to="/">
                    <img src="logo.png" alt="Logo" className='w-14' />
                </Link>
                <div className='hidden md:flex items-center space-x-4 font-semibold'>
                    <Link to="/products" className="hover:text-highlight transition-colors duration-200">Products</Link>
                    <button onClick={() => smoothScrollTo('about')} className="hover:text-highlight transition-colors duration-200">About Us</button>
                    <button onClick={() => smoothScrollTo('footer')} className="hover:text-highlight transition-colors duration-200">Contact</button>
                    <button onClick={() => smoothScrollTo('contact')} className='ml-4 px-6 py-2 bg-highlight text-secondary rounded-full font-bold hover:bg-highlight-secondary transition-all duration-200'>Book Now</button>
                </div>
                <div className='md:hidden flex items-center'>
                    <button
                        className='menu-toggle px-4 py-3 bg-highlight text-secondary rounded-full hover:bg-highlight-secondary transition-all duration-200'
                        onClick={handleToggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ?
                            <FontAwesomeIcon
                                icon={faXmark}
                                className={`transition-transform duration-300 font-bold ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
                            />
                            :
                            <FontAwesomeIcon
                                icon={faBars}
                                className={`transition-transform duration-300 font-bold ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
                            />
                        }
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`mobile-menu fixed top-0 left-0 right-0 z-40 bg-primary text-background md:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen
                ? 'translate-y-0 opacity-100'
                : '-translate-y-full opacity-0 pointer-events-none'
                }`}>
                <div className="pt-20 pb-6 px-6">
                    <nav className="flex flex-col space-y-4">
                        <Link to="/products" className="block py-3 px-4 rounded-lg hover:bg-secondary transition-all duration-200 font-semibold" onClick={() => setIsMenuOpen(false)}>
                            Products
                        </Link>
                        <button onClick={() => { smoothScrollTo('about'); setIsMenuOpen(false); }} className="block py-3 px-4 rounded-lg hover:bg-secondary transition-all duration-200 font-semibold text-left">
                            About Us
                        </button>
                        <button onClick={() => { smoothScrollTo('contact'); setIsMenuOpen(false); }} className="block py-3 px-4 rounded-lg hover:bg-secondary transition-all duration-200 font-semibold text-left">
                            Contact
                        </button>
                        <button onClick={() => { smoothScrollTo('contact'); setIsMenuOpen(false); }} className="block mt-4 py-3 px-6 bg-highlight text-secondary rounded-full font-bold text-center hover:bg-highlight-secondary transition-all duration-200">
                            Book Now
                        </button>
                    </nav>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    )

}


export default Header;