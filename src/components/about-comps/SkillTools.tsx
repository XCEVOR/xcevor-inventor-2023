import React from 'react'
import Image from "next/image";
import { AboutSkillType } from '@/types/types';



const getData = async (params:string) => {
  const dbServerUrl = process.env.DEV_DBSERVER_URL || "http://localhost:3000";
  const res = await fetch(`${dbServerUrl}/api/aboutskill/${params}`, {cache: "no-cache"});
  if (!res.ok) {throw new Error("Failed!");};
  return res.json();
}

const SkillTools = async () => {
  const skillData = [
    { toolName: "#6a1b9a", },
    { toolName: "#00695c1fads", },
    { toolName: "#ef6c001er", },
    { toolName: "#dd0000asdf", },
    { toolName: "#6a1b9a2", },
    { toolName: "#00695c2ed", },
    { toolName: "#ef6c002sdfad", },
  ];

  const fetchedSkillData:AboutSkillType[] = await getData("tools");


  return (
    // <div className='m-2 w-[200px] sm:w-[320px] md:w-[384px] lg:w-[512px] xl:w-[640px]'>
    <div className='w-full'>
      <div className='flex flex-col p-8    border border-white border-opacity-20  bg-[#221e22]/80 backdrop-blur rounded-xl'>
        <h2 className='flex justify-center   text-2xl font-bold mb-4'>Tools</h2>
        {/* <div className="w-full flex flex-wrap gap-30 justify-center">
            {skillData.map((d) => (
              <div className="flex flex-row relative max-w-500 m-2 p-2 border border-[#F8EFE4] border-opacity-20 rounded-lg  transition hover:-translate-y-1">
                  <Image src="/images/interest/python.svg" width={40} height={40} alt="" />
                <h2 className="flex items-center ml-2">{d.toolName}</h2>
              </div>
            ))}
        </div> */}

        <div className="w-full flex flex-wrap gap-30 justify-center">
        {fetchedSkillData.map((sdata, index) => (
          <div key={index} className="flex flex-row relative max-w-500 m-2 p-4 border border-[#F8EFE4] border-opacity-20 rounded-lg  transition duration-300 hover:scale-110">
            <div className='relative w-12 h-12 '>
              {sdata.image !== null 
                ? <Image src={`${process.env.DEV_FILESERVER_URL}${sdata.image}`} fill alt="" />
                : <Image src="/images/interest/python.svg" fill alt="" />
              }
            </div>
            <h2 className="relative flex items-center ml-4">{sdata.title}</h2>
          </div>
        ))}
        </div>
        
      </div>
    </div>
  )
}

export default SkillTools