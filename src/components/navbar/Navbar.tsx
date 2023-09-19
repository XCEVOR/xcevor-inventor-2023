import React from 'react';
import Link from 'next/link';
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
    
  ]

  return (
    <div className='h-12 text-[#ffbf00] p-4 flex items-center justify-between border-b-2 border-[#ffbf00] uppercase md:h-24 lg:px-20 xl:px-40'>

      <div className='text-xl md:font-bold'>
        <Link href="/">Home</Link>
      </div>

      <div className='hidden md:flex gap-4'>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      </div>

      <div className='md:hidden'>
        <Menu />
      </div>

    </div>
  )
}

export default Navbar