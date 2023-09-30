// components/ProgressBar.tsx
"use client"

import React, { useState, useEffect } from "react";

interface ProgressBarProps {
  bgcolor: string;
  completed: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ bgcolor, completed }) => {
  const [fillerWidth, setFillerWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFillerWidth(Math.floor(Math.random() * 100) + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const containerStyles: React.CSSProperties = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 0,
  };

  const fillerStyles: React.CSSProperties = {
    height: '100%',
    width: `${fillerWidth}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles: React.CSSProperties = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
