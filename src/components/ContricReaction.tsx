'use client';

import { useState, useEffect, useRef, CSSProperties } from 'react';

interface ContricReactionProps {
  /**
   * Number of concentric circles to display
   * @default 5
   */
  circleCount?: number;
  
  /**
   * Base size of the largest circle in pixels
   * @default 100
   */
  maxSize?: number;
  
  /**
   * Color of the circles
   * @default 'rgba(0, 0, 255, 0.3)'
   */
  color?: string;
  
  /**
   * Speed of the rotation animation
   * @default 1
   */
  rotationSpeed?: number;
  
  /**
   * Whether to follow the mouse pointer
   * @default true
   */
  followPointer?: boolean;
  
  /**
   * Delay in milliseconds for the follow effect
   * @default 100
   */
  followDelay?: number;
  
  /**
   * Whether to enable the pulsing effect
   * @default true
   */
  enablePulse?: boolean;
}

/**
 * ContricReaction - A reactive component that creates concentric circles
 * that revolve around and follow the mouse pointer.
 */
const ContricReaction: React.FC<ContricReactionProps> = ({
  circleCount = 5,
  maxSize = 100,
  color = 'rgba(0, 0, 255, 0.3)',
  rotationSpeed = 1,
  followPointer = true,
  followDelay = 100,
  enablePulse = true,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (followPointer) {
        setTimeout(() => {
          setMousePosition({ x: event.clientX, y: event.clientY });
        }, followDelay);
      }
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [followPointer, followDelay, isVisible]);
  
  // Generate circles
  const renderCircles = () => {
    const circles = [];
    
    for (let i = 0; i < circleCount; i++) {
      const size = maxSize - (i * (maxSize / circleCount));
      const opacity = 0.8 - (i * (0.6 / circleCount));
      const rotationDirection = i % 2 === 0 ? 1 : -1;
      const rotationDuration = 10 - (i * (5 / circleCount)) / rotationSpeed;
      const pulseScale = enablePulse ? 1.1 : 1;
      
      const circleStyle: CSSProperties = {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        border: `2px solid ${color}`,
        backgroundColor: 'transparent',
        opacity: opacity,
        transform: 'translate(-50%, -50%)',
        animation: `${enablePulse ? 'pulse' : ''} ${rotationDuration}s infinite ${rotationDirection > 0 ? 'linear' : 'reverse'}`,
      };
      
      circles.push(
        <div
          key={i}
          className="circle"
          style={circleStyle}
        />
      );
    }
    
    return circles;
  };
  
  const containerStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 9999,
    overflow: 'hidden',
  };
  
  const circlesContainerStyle: CSSProperties = {
    position: 'absolute',
    top: mousePosition.y,
    left: mousePosition.x,
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.3s ease',
  };
  
  return (
    <div ref={containerRef} style={containerStyle}>
      <style>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(${enablePulse ? 1.1 : 1});
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
          }
        }
      `}</style>
      <div style={circlesContainerStyle}>
        {renderCircles()}
      </div>
    </div>
  );
};

export default ContricReaction;