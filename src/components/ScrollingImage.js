import React, { useRef, useEffect, useState } from 'react';
import '../styles/ScrollingImage.css';

const ScrollingImage = ({ src, alt = 'Scrolling', scrollSpeed = 0.5 }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imageRef.current && isVisible) {
        imageRef.current.style.transform = `translateY(${(scrollY - containerRef.current.offsetTop) * scrollSpeed}px)`;
      }
    };

    if (isVisible) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, scrollSpeed]);

  return (
    <div className="scrolling-image-container" ref={containerRef}>
      <img ref={imageRef} src={src} alt={alt} />
    </div>
  );
};

export default ScrollingImage;
