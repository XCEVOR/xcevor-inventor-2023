"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Menu = () => {
  const [open, setOpen] = useState(false) ;

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
  ]


  return (
    <div>
      {!open 
        ? (<Image src="/img/open-ffbf00.svg" alt='' width={20} height={20} onClick={() => setOpen(true)} />)
        : (<Image src="/img/close-ffbf00.svg" alt='' width={20} height={20} onClick={() => setOpen(false)} />)
      }

      {open && <div className="bg-[#ffbf11] text-[#111] font-bold absolute left-0 top-24 w-full h-full h=[calc(100vh-3rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
        {links.map((link) => (
          <Link key={link.id} href={link.url} onClick={() => setOpen(false)}>
            {link.title}
          </Link>
        ))}
      </div>}
    </div>
  )
}

export default Menu