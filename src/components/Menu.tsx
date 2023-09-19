"use client";

import React, { useState } from 'react'
import Image from 'next/image'


const Menu = () => {
  const [open, setOpen] = useState(false) ;

  return (
    <div>
      {!open 
        ? (<Image src="/img/open-ffbf00.svg" alt='' width={20} height={20} onClick={() => setOpen(true)} />)
        : (<Image src="/img/close-ffbf00.svg" alt='' width={20} height={20} onClick={() => setOpen(false)} />)
      }
    </div>
  )
}

export default Menu