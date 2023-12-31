"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';

import Menu from '@/components/Menu';



const Navbar = () => {

  const links = [
    {
      id: 1, 
      title: "Home", 
      url: "/", 
    },
    {
      id: 2, 
      title: "About", 
      url: "/about", 
    },
    {
      id: 3, 
      title: "Resume", 
      url: "/resume", 
    },
    {
      id: 4, 
      title: "Portfolio", 
      url: "/portfolio", 
    },
    {
      id: 5, 
      title: "Home2", 
      url: "/", 
    },
  ];

  const path = usePathname();


  return (
    <div className='h-12 text-[#edf048] p-4 flex items-center justify-between border-b-2 border-[#edf048] uppercase md:h-24 lg:px-20 xl:px-40'>

      <div className='text-xl md:font-bold'>
        <Link href="/">Home</Link>
      </div>

      <div className='hidden md:flex gap-4'>
        {links.map((link) => (
          <Link className="relative" key={link.id} href={link.url}>
            {link.title}


            {/* {(
              ("/" + link.title.toLowerCase()) === (path) 
              && <motion.span
                layoutId="underline"
                className="absolute left-0 top-full block h-[3px] w-full bg-[#edf048]"
              />
            )} */}
            {(
              ( link.title.toLowerCase() ) === ( `${path.split("/", 2).slice(1)}` ) 
              && <motion.span
                layoutId="underline"
                className="absolute left-0 top-full block h-[3px] w-full bg-[#edf048]"
              />
            )}

                      {/* TEST DISPLAY CODE */}
            {/* {(
              <motion.span
                layoutId="underline"
                className="absolute left-0 top-full block h-[1px] w-full bg-[#edf048]"
              />
            )} */}
            {/* <h2>{("/" + link.title.toLowerCase())} </h2> */}
            {/* <h2>{path} </h2> */}
            {/* <h2>{(link.title.toLowerCase())} </h2> */}
            {/* <h2>{`${path.split("/", 2).slice(1)}`} </h2> */}

          </Link>
        ))}
      </div>

      <div className='md:hidden'>
        <Menu />
      </div>

    </div>
  )
}

export default Navbar