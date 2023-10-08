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
    // <div className='m-2 w-[200px] sm:w-[320px] md:w-[384px] lg:w-[512px] xl:w-[640px]'>
    <div className='w-full'>
      <h1 className='flex justify-center text-xl my-2'>Frontend Skills</h1>
      <div className='flex lg:flex-row p-8 bg-[#000000]/80 backdrop-blur rounded-xl'>
        <div className="w-full flex flex-wrap gap-30 justify-center">

            {skillData.map((d) => (
              <div className="flex flex-row relative max-w-500 m-2 p-2 border border-purple-600 rounded-lg  transition hover:-translate-y-1">

                  <Image src="/img/interest/python.svg" width={40} height={40} alt="" />

                <h1 className="flex items-center ml-2">{d.toolName}</h1>
              </div>
            ))}
            
          </div>
      </div>
    </div>
  )
}

export default SkillFrontend