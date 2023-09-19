import Image from 'next/image'
import React from 'react'

const Me = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)] lg:flex-row'>

      <div className='flex flex-col flex-1 items-center justify-center gap-8 text-[#ffbf00] font-bold'>
        <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl'>
          me
        </h1>
      </div>
      <div className='flex-1 w-full relative'>
        <Image src="/img/me.jpg" alt='' fill className='object-cover' />
      </div>
    </div>
  )
}

export default Me