import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Image from "next/legacy/image";
// import darius from '/public/assets/images/splash/darius-splash.jpg';
// import jax from '/public/assets/images/splash/jax.jpg'

interface CarouselProps {
  slides: {
    image: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Image src={slide.image} alt='travel image' className='image' width={200} height={400} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
