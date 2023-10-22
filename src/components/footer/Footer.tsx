import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='flex flex-col items-center  h-fit px-0 md:px-20 lg:px-40 py-28   backdrop-blur-[0.5rem] bg-[#221e22] bg-opacity-75'>
      <div className='h-12 relative flex flex-col  w-[90vw] lg:w-[80vw] items-center justify-center '>
        <div className='flex items-center justify-between w-full'>
          <Link href="/" className='font-bold text-xl'>XXX</Link>
          <Link href="/" className='font-bold text-xl'>XXX</Link>
        </div>
        <p className='mt-8 text-lg'>Copyright © {currentYear} All rights reserved by Hochan</p>
      </div>
    </div>
  )
}

export default Footer
