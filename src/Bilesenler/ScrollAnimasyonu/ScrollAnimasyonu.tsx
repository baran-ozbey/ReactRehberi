import React, { useEffect, useRef, useState } from 'react';
import './ScrollAnimasyonu.css';

interface ScrollAnimasyonuProps {
  children: React.ReactNode;
  gecikme?: number;
  animasyonTuru?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';
}

const ScrollAnimasyonu: React.FC<ScrollAnimasyonuProps> = ({ 
  children, 
  gecikme = 0,
  animasyonTuru = 'fade-up'
}) => {
  const [gorunurMu, setGorunurMu] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gozlemci = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setGorunurMu(true);
          }, gecikme);
          
          if (elementRef.current) {
            gozlemci.unobserve(elementRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      gozlemci.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        gozlemci.unobserve(elementRef.current);
      }
    };
  }, [gecikme]);

  return (
    <div 
      ref={elementRef} 
      className={`scroll-animasyonu scroll-animasyonu--${animasyonTuru} ${gorunurMu ? 'scroll-animasyonu--gorunur' : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimasyonu;
