import Link from 'next/link'
import React from 'react'

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
    <div>
      <Link href="/">Home</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar