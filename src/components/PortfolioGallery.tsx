'use client';

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Ensure autoplay CSS is also imported if used
// import 'swiper/css/core'; // Remove incorrect core CSS import
import 'swiper/css/effect-coverflow'; // Import EffectCoverflow CSS
import 'swiper/css/pagination'; // Import Pagination CSS

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const PortfolioGallery = () => {
  // Update this array with the paths to your images in the public/portfolio folder
  const portfolioImages = [
    '/portfolio/1.png',
    '/portfolio/2.png',
    '/portfolio/3.png',
    '/portfolio/4.png',
    '/portfolio/5.png'
    // Add more image paths here as needed
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
      <div className="w-full px-4 md:px-8">
        
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1.5, // Zwiększamy modyfikator dla lepszego efektu
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="portfolio-swiper"
          breakpoints={{
            640: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {portfolioImages.map((src, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div 
                  className={`aspect-square overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 ${isActive ? 'scale-150 z-10 shadow-xl' : 'scale-100'}`}
                >
                  <img 
                    src={src} 
                    alt={`Portfolio ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Dodajemy stylizację dla Swipera */}
      <style jsx global>{`
        .portfolio-swiper {
          width: 100%;
          padding-top: 20px;
          padding-bottom: 50px;
          overflow: visible !important; /* Pozwala na wystawanie powiększonych slajdów */
        }
        
        .swiper-slide {
          transition: transform 0.5s ease, opacity 0.5s ease;
          height: auto;
          opacity: 1 !important; /* Wymuszamy pełną widoczność dla wszystkich slajdów domyślnie */
        }

        .swiper-slide-active {
          z-index: 10;
        }
        
        /* Dopiero po inicjalizacji Swipera (klasa .swiper-initialized) zmieniamy przezroczystość */
        .swiper-initialized .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7 !important;
        }
        
        .swiper-pagination {
          margin-top: 20px;
        }
        
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #f97316;
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

export default PortfolioGallery;
