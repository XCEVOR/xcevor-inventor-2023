import React from 'react'
import Image from "next/image";
import { AboutSkillType } from '@/types/types';



const getData = async (params:string) => {
  const res = await fetch(`http://localhost:3000/api/aboutskill/${params}`, {cache: "no-cache"});
  if (!res.ok) {throw new Error("Failed!");};
  return res.json();
}

const SkillDeployment = async () => {
  const skillData = [
    { toolName: "#6a1b9a11", },
    { toolName: "#00695c1asdf", },
    { toolName: "#ef6c0012d", },
    { toolName: "#dd0000asdf", },
    { toolName: "#6a1b9a", },
    { toolName: "#00695c2", },
    { toolName: "#ef6c002er", },
  ];

  const fetchedSkillData:AboutSkillType[] = await getData("deployment");


  return (
    // <div className='m-2 w-[200px] sm:w-[320px] md:w-[384px] lg:w-[512px] xl:w-[640px]'>
    <div className='w-full'>
      <h1 className='flex justify-center text-xl my-2'>Deployment Skills</h1>
      <div className='flex lg:flex-row p-8 bg-[#0A0A0A]/80 backdrop-blur rounded-xl'>
        {/* <div className="w-full flex flex-wrap gap-30 justify-center">
            {skillData.map((d) => (
              <div className="flex flex-row relative max-w-500 m-2 p-2 border border-[#F8EFE4] border-opacity-20 rounded-lg  transition hover:-translate-y-1">
                  <Image src="/img/interest/python.svg" width={40} height={40} alt="" />
                <h1 className="flex items-center ml-2">{d.toolName}</h1>
              </div>
            ))}
        </div> */}

        <div className="w-full flex flex-wrap gap-30 justify-center">
        {fetchedSkillData.map((sdata) => (
          <div className="flex flex-row relative max-w-500 m-2 p-2 border border-[#F8EFE4] border-opacity-20 rounded-lg  transition hover:-translate-y-1">
              {sdata.image !== null 
                ? <Image src={`${process.env.DEV_FILESERVER_URL}${sdata.image}`} width={40} height={40} alt="" />
                : <Image src="/img/interest/python.svg" width={40} height={40} alt="" />
              }
            <h1 className="flex items-center ml-2">{sdata.title}</h1>
          </div>
        ))}
        </div>
        
      </div>
    </div>
  )
}

export default SkillDeployment