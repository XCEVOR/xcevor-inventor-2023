// components/BackgroundImage.tsx

import React from 'react';
import Image from 'next/image'

const BackgroundImage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
      <Image src={process.env.ENV_PHOTO2_URL || "/images/about/background-dark-1920x1080.png"}
      className="object-cover w-full h-full"
      fill
      quality={100}
      alt="Background"
      />
    </div>
  );
};

export default BackgroundImage;
