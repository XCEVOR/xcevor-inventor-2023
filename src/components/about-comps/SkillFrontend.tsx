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
    <div className='mt-20 w-[200px] sm:w-[320px] md:w-[384px] lg:w-[512px] xl:w-[640px]'>
      <h1>Frontend Skills</h1>
      <div className='p-4 pb-8 lg:flex-row bg-[#000000]/80 backdrop-blur'>

      <div className="w-full flex flex-wrap mt-30 gap-30 justify-center">
          {skillData.map((d) => (
            <div className="max-w-500 m-2 border border-purple-600 rounded-lg ">
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