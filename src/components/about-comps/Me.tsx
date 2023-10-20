import { aboutMeDataType } from '@/types/types';
import CopyToClipboardButton from '@/utils/CopyToClipboardButton';
import { Reveal } from '@/utils/Reveal';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'



const getData =async () => {
  
  const dbServerUrl = process.env.DEV_DBSERVER_URL || "http://localhost:3000";
  console.log({dbServerUrl});
  const res = await fetch(`${dbServerUrl}/api/aboutme`, {cache: "no-store"});
  if (!res.ok) { throw new Error("Failed!"); };
  return res.json();
}

const Me = async () => {
  const infoData = [
    {
      id: 1,
      classification: "maintitle",
      title: "maintitle", 
      detail: "MAIN TITLE",
    },
    {
      id: 2,
      classification: "subtitle",
      title: "subtitle", 
      detail: "SUB TITLE",
    },
    {
      id: 3,
      classification: "info-group-a",
      title: "Blog", 
      detail: "https://www.google.com",
    },
    {
      id: 4,
      classification: "info-group-a",
      title: "Email", 
      detail: "email@gmail.com",
    },
    {
      id: 5,
      classification: "info-group-b",
      title: "Group B Tille", 
      detail: "Description",
    },
  ];

  const infoDataStyle = "flex items-center space-x-2 mt-6";

  const aboutMeData:aboutMeDataType[] = await getData();
  const maintitleData:aboutMeDataType | any = aboutMeData.find(data => data.classification === "maintitle");
  const subtitleData:aboutMeDataType | any = aboutMeData.find(data => data.classification === "subtitle");
  const infoGroupAData:aboutMeDataType[] = aboutMeData.filter(infoa => infoa.classification === "info-group-a");
  const infoGroupBData:aboutMeDataType[] = aboutMeData.filter(infob => infob.classification === "info-group-b");
  // console.log(" @@ console.log(maintitleData)", maintitleData);
  // console.log(" @@ console.log(infoGroupAData)", infoGroupAData);

  return (
    // <div className='flex flex-col md:flex-row w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] h-fit lg:h-[calc(80vh-3rem)] md:h-[calc(80vh-6rem)] p-4 bg-[#0A0A0A]/80 backdrop-blur rounded-xl'>
    <div>
      <h1 className="relative text-3xl font-bold uppercase lg:text-4xl  text-[#FAD02C]">About</h1>
      {/* <div className='flex flex-col md:flex-row  w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]  h-fit lg:h-[calc(80vh-3rem)]  p-4 mt-8  bg-[#0A0A0A]/80 backdrop-blur rounded-xl'> */}
      <div className='flex flex-col lg:flex-row items-start justify-start   h-fit lg:h-[calc(80vh-3rem)]  p-4 lg:p-8 mt-8  bg-[#0A0A0A]/80 backdrop-blur rounded-xl'>

        {/* <div className='relative m-auto md:m-0 w-full sm:w-2/3 md:h-1/2 md:w-1/3 lg:h-2/3 xl:h-full'> */}
        <div className='relative m-auto lg:m-0  w-4/5 sm:w-1/2 lg:w-1/3  '>
          <div className='aspect-[3/4] '>
            <Image src="/img/about/profile-character-1200x1600.png" alt='' fill className='object-contain  ' />
          </div>
        </div>
        
        <div className='relative flex flex-col w-full lg:w-2/3 items-center justify-start gap-8 text-[111111] px-10 '>
          {/* <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl'>
            me
          </h1> */}

          <div className="w-full lg:col-span-8 pt-4 lg:pt-0">
            <Reveal mydelay={2 * 1.0} >
              {maintitleData 
                ? <h3 className="text-2xl font-bold">{maintitleData.detail}</h3>
                : <h3 className="text-2xl font-bold">Developer</h3>
              }
            </Reveal>
            <Reveal mydelay={2 * 1.2} >
              {subtitleData 
                ? <p className="italic mt-4">{subtitleData.detail}</p>
                : <p className="italic mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              }
            </Reveal>
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
                  {infoGroupAData.slice( 0, Math.ceil(infoGroupAData.length / 2) ).map((infoa:aboutMeDataType, index:number) => (
                    <Reveal mydelay={2 * 1.4} key={index} >
                      <li className={infoDataStyle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F8EFE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        <strong className="font-bold">{infoa.title}:</strong>
                        {infoa.detail.startsWith("https://") 
                          ? (<Link href={infoa.detail} passHref legacyBehavior><a className='hover:text-[#FAD02C] transition-colors duration-300 ease-in-out' target='_blank'>{infoa.detail}</a></Link>) 
                          : (<span>{infoa.detail}</span>)
                        }
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
              <div className='m-0 p-0'>
                <ul>
                  {infoGroupAData.slice( Math.ceil(infoGroupAData.length / 2) ).map((infoa:aboutMeDataType, index:number) => (
                    <Reveal mydelay={2 * 1.6} key={index} >
                      <li className={infoDataStyle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F8EFE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        <strong className="font-bold">{infoa.title}:</strong>
                        {infoa.title === "Email"
                          // If the infoa.title is Email, activate the clipboard button function
                          ? <CopyToClipboardButton text={infoa.detail} ></CopyToClipboardButton>
                          :
                        
                            (infoa.detail.startsWith("https://") 
                            ? (<Link href={infoa.detail} passHref legacyBehavior><a target='_blank'>{infoa.detail}</a></Link>) 
                            : (<span>{infoa.detail}</span>))
                        }
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-12'>
              <Reveal mydelay={2 * 1.8} >
                {infoGroupBData 
                  ?
                  <div>
                    {infoGroupBData.map((infob:aboutMeDataType, index:number) => (
                      <p className='mt-4' key={index} >{infob.detail}</p>
                    ))}
                  </div>
                  :
                  <p className='mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                }
              </Reveal>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Me