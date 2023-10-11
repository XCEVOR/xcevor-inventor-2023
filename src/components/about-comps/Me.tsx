import { aboutMeDataType } from '@/types/types';
import Image from 'next/image'
import React from 'react'



const getData =async () => {
  const res = await fetch("http://localhost:3000/api/aboutme", {cache: "no-store"});
  if (!res.ok) { throw new Error("Failed!"); };
  return res.json();
}

const Me = async () => {
  const infoData = [
    {
      id: 1,
      title: "AAA", 
      content: "1 May 1995",
    },
    {
      id: 2,
      title: "BBB", 
      content: "www.example.com",
    },
    {
      id: 3,
      title: "CCC", 
      content: "+123 456 7890",
    },
    {
      id: 4,
      title: "DDD", 
      content: "New York, USA",
    },
    {
      id: 5,
      title: "EEE", 
      content: "xx",
    },
    {
      id: 6,
      title: "FFF", 
      content: "Master",
    },
    {
      id: 7,
      title: "GGG", 
      content: "email@example.com",
    },
    {
      id: 8,
      title: "HHH", 
      content: "Available",
    },
    {
      id: 9,
      title: "III", 
      content: "Available22",
    },
  ];

  const infoDataStyle = "flex items-center space-x-2 mt-6";

  const aboutMeData:aboutMeDataType[] = await getData();

  return (
    // <div className='flex flex-col md:flex-row w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] h-fit lg:h-[calc(80vh-3rem)] md:h-[calc(80vh-6rem)] p-4 bg-[#0A0A0A]/80 backdrop-blur rounded-xl'>
    <div className='flex flex-col md:flex-row w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] h-fit lg:h-[calc(80vh-3rem)] p-4 bg-[#0A0A0A]/80 backdrop-blur rounded-xl'>

      <div className='relative m-auto md:m-0 w-full sm:w-2/3 md:h-1/2 md:w-1/3 lg:h-2/3 xl:h-full'>
        <div className='aspect-[3/4]'>
          <Image src="/img/about/profile-character-1200x1600.png" alt='' fill className='object-cover h-[calc(full/4)] w-full' />
        </div>
      </div>
      
      <div className='relative flex flex-col w-full md:w-2/3 items-center justify-center gap-8 text-[111111] px-10 '>
        {/* <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl'>
          me
        </h1> */}

        <div className="lg:col-span-8 pt-4 lg:pt-0">
          <h3 className="text-2xl font-bold">UI/UX &amp; Graphic Designer</h3>
          <p className="italic mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div className='m-0 p-0'>
              <ul>

                {infoData.slice( 0, Math.ceil(infoData.length / 2) ).map((info, index) => (
                <li className={infoDataStyle}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <strong className="font-bold">{info.title}:</strong> <span>{info.content}</span>
                </li>
                ))}

              </ul>
            </div>
            <div className='m-0 p-0'>
              <ul>

                {infoData.slice( Math.ceil(infoData.length / 2) ).map((info, index) => (
                <li className={infoDataStyle}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <strong className="font-bold">{info.title}:</strong> <span>{info.content}</span>
                </li>
                ))}
                
              </ul>
            </div>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div className='m-0 p-0'>
              <ul>

                {aboutMeData.slice( 0, Math.ceil(aboutMeData.length / 2) ).map((info, index) => (
                <li className={infoDataStyle}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <strong className="font-bold">{info.title}:</strong> <span>{info.detail}</span>
                </li>
                ))}

              </ul>
            </div>
            <div className='m-0 p-0'>
              <ul>

                {aboutMeData.slice( Math.ceil(aboutMeData.length / 2) ).map((info, index) => (
                <li className={infoDataStyle}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <strong className="font-bold">{info.title}:</strong> <span>{info.detail}</span>
                </li>
                ))}

                

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