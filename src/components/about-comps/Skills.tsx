import React from 'react';
import ProgressBar from '@/components/about-comps/ProgressBar';
import SkillFrontend from './SkillFrontend';
import SkillBackend from './SkillBackend';
import SkillDeployment from './SkillDeployment';
import SkillTools from './SkillTools';


const Skills = () => {
  const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
    { bgcolor: "#dd0000", completed: 83 },
  ];


  return (
    <div className='mt-20 w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]'>
      <h1>Skills</h1>
      {/* <div className='grid grid-cols-2 p-4 pb-8  bg-[#0A0A0A]/80 backdrop-blur'> */}
      <div className='grid lg:grid-cols-2 gap-8 '>

        <SkillFrontend />
        <SkillBackend />
        <SkillDeployment />
        <SkillTools />

        {/* <h1>Skills</h1> */}
        
        {/* <div className='px-4 lg:w-1/2'>
          {testData.map((item, idx) => (
            <div className='pt-4'>
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            </div>
          ))}
        </div>
        <div className='px-4 lg:w-1/2'>
          {testData.map((item, idx) => (
            <div className='pt-4'>
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Skills