import Image from 'next/image'
import React from 'react'

const Me = () => {
  return (
    <div className='flex flex-col h-[calc(60vh-3rem)] md:h-[calc(60vh-6rem)] p-4 lg:flex-row'>

      <div className='w-1/3 relative'>
        <Image src="/img/me.jpg" alt='' fill className='object-cover' />
      </div>
      
      <div className='flex flex-col w-2/3 items-center justify-center gap-8 text-[111111] px-10 '>
        {/* <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl'>
          me
        </h1> */}

        <div className="lg:col-span-8 pt-4 lg:pt-0 content animate-fade-left" data-aos="fade-left">
          <h3 className="text-2xl font-bold">UI/UX &amp; Graphic Designer</h3>
          <p className="italic mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div>
              <ul>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <strong className="font-bold">AAA:</strong> <span>1 May 1995</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <strong className="font-bold">BBB:</strong> <span>www.example.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <strong className="font-bold">CCC:</strong> <span>+123 456 7890</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <strong className="font-bold">City:</strong> <span>New York, USA</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <strong className="font-bold">DDD:</strong> <span>xx</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <strong className="font-bold">FFF:</strong> <span>Master</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <strong className="font-bold">GGG:</strong> <span>email@example.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <strong className="font-bold">FFF:</strong> <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Me