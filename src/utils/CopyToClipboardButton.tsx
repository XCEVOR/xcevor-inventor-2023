"use client";

import React, { useState } from 'react';

type textType = {text:string}

const CopyToClipboardButton: React.FC<textType> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(text).then(() => {
  //     setIsCopied(true);
  //   });
  // };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const tooltipStyle: React.CSSProperties = {
    position: 'relative',
    cursor: isHovered ? 'pointer' : 'auto',
  };

  const tooltipTextStyle: React.CSSProperties = {
    visibility: isHovered ? 'visible' : 'hidden',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 300ms',
    backgroundColor: '#282120',
    color: '#E6C2BF',
    textAlign: 'center',
    borderRadius: '4px',
    padding: '5px',
    position: 'absolute',
    bottom: '120%',
    left: '110%',
    transform: 'translateX(-50%)',
    zIndex: 1,
  };


  return (
    <div onClick={copyToClipboard}>
      <span 
        style={{ 
          position: "relative",
          cursor: isHovered ? "pointer" : "auto",
          color: isHovered ? "#FAD02C" : "#F8EFE4",
          transition: "color 300ms",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // title="Copy to Clipboard"
      >

        {/* {isCopied && <span> - Copied to Clipboard!</span>} */}
        {isCopied ? "Copied to Clipboard" : text}
        {isHovered && (
          <div style={tooltipTextStyle}>Copy to Clipboard</div>
        )}

      </span>
    </div>
  );
}

export default CopyToClipboardButton