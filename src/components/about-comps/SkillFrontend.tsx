import React from 'react'
import Image from "next/image";


const SkillFrontend = () => {
  const skillData = [
    { toolName: "#6a1b9a", },
    { toolName: "#00695c", },
    { toolName: "#ef6c00", },
    { toolName: "#dd0000", },
    { toolName: "#6a1b9a2", },
    { toolName: "#00695c2", },
    { toolName: "#ef6c002", },
  ];


  return (
    <div className='mt-20 w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]'>
      <h1>Frontend Skills</h1>
      <div className='flex flex-col p-4 pb-8 lg:flex-row bg-[#000000]/80 backdrop-blur'>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]'>
          {skillData.map((d) => (
            <div className='w-full'>
              <div className="flex flex-row relative m-4 p-4 bg-[#000000]/80 backdrop-blur">
              <div className="">
                <Image src="/img/interest/python.svg" width={40} height={40} alt="" />
              </div>
              <h1 className="flex items-center ml-2">{d.toolName}</h1>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default SkillFrontend