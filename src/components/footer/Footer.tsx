import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='flex flex-col items-center  h-fit px-0 md:px-20 lg:px-40 py-28   backdrop-blur-[0.5rem] bg-[#0D0B0D] bg-opacity-75'>
      <div className='h-12 relative flex flex-col  w-[90vw] lg:w-[80vw] lg:max-w-[80rem] items-center justify-center '>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-row gap-4 items-center'>
            <Link href="/" >
              <div className="relative w-14 aspect-square">
                <Image src={`/images/logo/logo-H-03.svg`} fill alt="" />
              </div>
            </Link>
            <Link href="/" className='font-bold text-3xl'>HOCHAN</Link>
          </div>
          <div className='flex flex-row gap-4'>
            <div className="relative w-10 aspect-square">
              <Link href="https://github.com/XCEVOR" passHref legacyBehavior>
                <a target='_blank' > <Image src={`${process.env.DEV_FILESERVER_URL}/pfolio-fileserver/logo-github-ddd.svg`} fill alt="" /> </a>
              </Link>
            </div>
            <div className="relative w-10 aspect-square">
              <Link href="https://XCEVOR.tistory.com" passHref legacyBehavior>
                <a target='_blank' > <Image src={`${process.env.DEV_FILESERVER_URL}/pfolio-fileserver/logo-tistory-ddd.svg`} fill alt="" /> </a>
              </Link>
            </div>
            <div className="relative w-10 aspect-square">
              <Link href="https://twitter.com/XCEVOR" passHref legacyBehavior>
                <a target='_blank' > <Image src={`${process.env.DEV_FILESERVER_URL}/pfolio-fileserver/logo-twitter-ddd.svg`} fill alt="" /> </a>
              </Link>
            </div>
            {/* <div className="relative w-12 aspect-square">
              <Image src={`${process.env.DEV_FILESERVER_URL}/pfolio-fileserver/logo-tistory-ddd.svg`} fill alt="" />
            </div> */}
          </div>
        </div>
        <p className='mt-8 text-lg'>Copyright © {currentYear} All rights reserved by Hochan</p>
      </div>
    </div>
  )
}

export default Footer
