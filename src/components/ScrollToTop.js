import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // npm install react-icons agar nahi hai toh

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Button tabhi dikhao jab user 300px niche scroll kare
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
               <button
                    onClick={scrollToTop}
                    className="bg-amber-500/90 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center backdrop-blur-sm"
                >
                    <FaArrowUp size={16} /> {/* Icon size chota kar diya */}
             </button>
            )}
        </div>
    );
};

export default ScrollToTop;