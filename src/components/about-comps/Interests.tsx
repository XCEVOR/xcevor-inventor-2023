import React from 'react'
import SoftwareTool from './SoftwareTool';
import Image from 'next/image';

const Interests = () => {
  const interestData = [
    { toolName: "#6a1b9a", },
    { toolName: "#00695c", },
    { toolName: "#ef6c00", },
    { toolName: "#dd0000", },
  ];


  return (
    <div className='mt-20'>
      <h1>Interests</h1>
      <div className='flex flex-col p-4 pb-8 lg:flex-row '>
        {interestData.map((d) => (
          <SoftwareTool toolName={d.toolName} />
        ))}
      </div>
    </div>
  )
}

export default Interests