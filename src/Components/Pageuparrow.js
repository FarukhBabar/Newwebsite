import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
const Pageuparrow = () => {
     const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  // Function to handle scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Event listener to show/hide scroll button
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className='scroll-top-button'
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'linear-gradient(135deg, #007bff, #00bfff)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            zIndex: '1000',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  )
}

export default Pageuparrow