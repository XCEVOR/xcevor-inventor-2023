import React from 'react'
import SoftwareTool from './SoftwareTool';
import Image from 'next/image';

const Interests = () => {
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


  return (
    <div className='mt-20'>
      <h1>Interests</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]'>
        {interestData.map((d) => (
          <div className='w-full'>
            <SoftwareTool toolName={d.toolName} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Interests