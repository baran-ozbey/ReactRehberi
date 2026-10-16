import React, { useState, useRef } from 'react';
import type { MouseEvent } from 'react';
import './TiltKarti.css';

interface TiltKartiProps {
  children: React.ReactNode;
  className?: string;
  perspektif?: number;
  maksimumAcilar?: number;
}

const TiltKarti: React.FC<TiltKartiProps> = ({ 
  children, 
  className = '', 
  perspektif = 1000,
  maksimumAcilar = 15
}) => {
  const kartRef = useRef<HTMLDivElement>(null);
  const [stil, setStil] = useState({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!kartRef.current) return;
    
    const kart = kartRef.current.getBoundingClientRect();
    const genislik = kart.width;
    const yukseklik = kart.height;
    
    const mouseX = e.clientX - kart.left - genislik / 2;
    const mouseY = e.clientY - kart.top - yukseklik / 2;
    
    const rotateY = (mouseX / (genislik / 2)) * maksimumAcilar;
    const rotateX = -(mouseY / (yukseklik / 2)) * maksimumAcilar;

    setStil({
      transform: `perspective(${perspektif}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setStil({
      transform: `perspective(${perspektif}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
    });
  };

  return (
    <div 
      ref={kartRef}
      className={`tilt-karti ${className}`}
      style={stil}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default TiltKarti;
