// components/BackgroundImage.tsx

import React from 'react';
import Image from 'next/image'

const BackgroundImage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] brightness-[.1]">
      <Image src="/images/about/background-dark-1920x1080.png"
      className="object-cover w-full h-full"
      fill
      alt="Background"
      />
    </div>
  );
};

export default BackgroundImage;
