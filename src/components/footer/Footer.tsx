import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-[#f7f3ed] flex items-center justify-between   backdrop-blur-[0.5rem] bg-[#221e22] bg-opacity-75'>
      <Link href="/" className='font-bold text-xl'>XXX</Link>
      <p className=' text-lg'>Copyright © {currentYear} All rights reserved by Hochan</p>
    </div>
  )
}

export default Footer
