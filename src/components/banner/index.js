import React, { useState, useEffect, useRef } from 'react';
import '../../scss/_banner.scss';

const images = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg",
    alt: "Slide 1",
    caption: "slide 1"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/2132107/pexels-photo-2132107.jpeg",
    alt: "Slide 2",
    caption: "slide 2"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/789012/pexels-photo-789012.jpeg",
    alt: "Slide 3",
    caption: "slide 3"
  }
];

const delay = 3500;

function Banner() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [nextImageIndex, setNextImageIndex] = useState((index + 1) % images.length);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setNextImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  const handleThumbnailClick = () => {
    setIndex(nextImageIndex);
    setNextImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="banner">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((image) => (
          <img key={image.id} className="slide" src={image.src} alt={image.alt} />
        ))}
      </div>

      <div className="banner-text flex flex-col justify-center items-start">
        <p>Welcome To TenTwenty Farms</p>
        <h1>From our Farms <br /> To your hands</h1>
      </div>

      

      <div className='ex3 snake-border'>
      <div className="thumbnail" onClick={handleThumbnailClick}>
        <img src={images[nextImageIndex].src} alt={`Thumbnail`} />
        <p className='text-center'>Next</p>
      </div>
      </div>
    </div>
  );
}

export default Banner;
