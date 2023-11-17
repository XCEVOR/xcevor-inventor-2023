import React from 'react';
import ProgressBar from '@/components/about-comps/ProgressBar';
import SkillFrontend from './SkillFrontend';
import SkillBackend from './SkillBackend';
import SkillDeployment from './SkillDeployment';
import SkillTools from './SkillTools';
import { Reveal } from '@/utils/Reveal';


const Skills = () => {
  const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
    { bgcolor: "#dd0000", completed: 83 },
  ];


  return (
    // <div className='mt-20 w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]'>
    <div className='mt-20 '>
      <h2 className="relative mb-8  text-3xl font-bold uppercase lg:text-4xl  text-[#edf048]">Skills</h2>
      {/* <div className='grid grid-cols-2 p-4 pb-8  bg-[#0A0A0A]/80 backdrop-blur'> */}
      <div className='grid lg:grid-cols-2 gap-8 '>
        <Reveal mydelay={ 1 } >< SkillFrontend /></Reveal>
        <Reveal mydelay={ 2 } >< SkillBackend /></Reveal>
        <Reveal mydelay={ 1 } >< SkillDeployment /></Reveal>
        <Reveal mydelay={ 2 } >< SkillTools /></Reveal>
      

        {/* <h2>Skills</h2> */}
        
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