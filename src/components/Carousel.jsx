import PropTypes from 'prop-types';
import { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mx-auto end-px relative">
      <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
        {images.map((img, index) => (
          <div key={index} className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
            <img src={`/products/${img}`} className="absolute inset-0 w-full h-full object-contain" alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={goToPrevSlide}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={goToNextSlide}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </span>
        </button>
      </div>
      <div className="flex mt-4 justify-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={`/products/${img}`}
            alt={`Thumbnail ${index + 1}`}
            className={`w-12 h-12 md:w-16 md:h-16 mx-1 cursor-pointer rounded-lg ${index === currentIndex ? 'border-4 border-white' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
