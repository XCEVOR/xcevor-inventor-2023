import React from 'react'
import Image from "next/image";


const SkillBackend = () => {
  const skillData = [
    { toolName: "#6a1b9a111", },
    { toolName: "#00695c1", },
    { toolName: "#ef6c0012", },
    { toolName: "#dd0000", },
    { toolName: "#6a1b9a22", },
    { toolName: "#00695c222", },
    { toolName: "#ef6c002", },
  ];


  return (
    // <div className='m-2 w-[200px] sm:w-[320px] md:w-[384px] lg:w-[512px] xl:w-[640px]'>
    <div className='w-full'>
      <h1 className='flex justify-center text-xl my-2'>Backend Skills</h1>
      <div className='flex lg:flex-row p-8 bg-[#000000]/80 backdrop-blur rounded-xl'>
        <div className="w-full flex flex-wrap gap-30 justify-center">

            {skillData.map((d) => (
              <div className="flex flex-row relative max-w-500 m-2 p-2 border border-purple-600 rounded-lg ">

                  <Image src="/img/interest/python.svg" width={40} height={40} alt="" />

                <h1 className="flex items-center ml-2">{d.toolName}</h1>
              </div>
            ))}
            
          </div>
      </div>
    </div>
  )
}

export default SkillBackend