import React, { useEffect, useState } from 'react';
import 'D:/IVW/batterytech/src/App.css';

const CircularProgressBar = ({ percentage }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    // Smooth transition animation for percentage
    setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 100); // Delay for animation start
  }, [percentage]);

  const radius = 50; // Radius of the circle
  const strokeWidth = 10; // Width of the stroke
  const normalizedRadius = radius - strokeWidth * 0.5; // Adjust for stroke width
  const circumference = normalizedRadius * 2 * Math.PI; // Circumference of the circle
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference; // Dash offset

  return (
    <div className="circular-progress-bar">
      <svg height={radius * 2} width={radius * 2}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#00C6FF", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#0072ff", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Progress circle with gradient */}
        <circle
          stroke="url(#grad1)" // Apply linear gradient
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transition: 'stroke-dashoffset 1s ease-in-out', // Smooth transition for animation
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%', // Start the progress from top
          }}
        />
      </svg>
      <div className="percentage-label">{`${Math.round(animatedPercentage)}%`}</div>
    </div>
  );
};

export default CircularProgressBar;
