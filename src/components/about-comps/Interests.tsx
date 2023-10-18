import React from 'react'
import SoftwareTool from './SoftwareTool';
import Image from 'next/image';
import { aboutInterestDataType } from '@/types/types';
import { Reveal } from '@/utils/Reveal';




interface ToolProps {
  toolName: string;
  toolLogo: string;
}

const getData = async () => {
  const dbServerUrl = process.env.DEV_DBSERVER_URL || "http://localhost:3000";
  const res = await fetch(`${dbServerUrl}/api/aboutinterests` , { cache: "no-cache" } );
  if (!res.ok) { throw new Error("Failed!"); };
  return res.json();
}

const Interests = async () => {
  const interestData = [
    { toolName: "#6a1b9a", },
    { toolName: "#00695c", },
    { toolName: "#ef6c00", },
    { toolName: "#dd0000", },
    { toolName: "#6a1b9a2", },
    { toolName: "#00695c2", },
    { toolName: "#ef6c002", },
    { toolName: "#dd00002", },
    { toolName: "#ef6c003", },
    { toolName: "#dd00003", },
  ];

  const aboutInterestData:aboutInterestDataType[] = await getData();


  return (
    <div className='mt-20'>
      <h1 className='text-2xl text-[#FAD02C] font-bold uppercase'>Interests</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]'>
        {interestData.map((d, index) => (
          <div className='w-full' key={index}>
            {/* <SoftwareTool toolName={d.toolName} /> */}
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]'>
        {aboutInterestData.map((data) => (
          <Reveal mydelay={ data.priority * 0.5 } key={ data.id }>
            <div className='w-full'>

                <SoftwareTool toolName={data.title} toolLogo={data.logo} />
              
            </div>
          </Reveal>
        ))}
      </div>

    </div>
  )
}

export default Interests