import { ResumeDataDescriptionType } from '@/types/types';
import { Reveal } from '@/utils/Reveal';
import React from 'react'



const getResumeDataDescription = async ( titleSlug: string ) => {
  // console.log(" @@@@@@@@@@ const getResumeDataDescription = async ( titleSlug: string ) => ");
  const dbServerUrl = process.env.DEV_DBSERVER_URL || "http://localhost:3000";
  const res = await fetch(`${dbServerUrl}/api/resume/${titleSlug}`, {cache: "no-cache"});
  // console.log(res.json);
  if (!res.ok) {throw new Error("Failed!");};
  return res.json();
}

const ResumeDescription = async ( {params}:{params: {resumeTitle:string}} ) => {

  // console.log(params.resumeTitle)
  const bundleResumeDataDescription:ResumeDataDescriptionType[] = await getResumeDataDescription( params.resumeTitle );

  return (
    <div>
      {/* <h1>ResumeDescription</h1> */}
      {/* <h1>{params.resumeTitle}</h1> */}
      {bundleResumeDataDescription.map((rsDesc, index) => (
        <Reveal key={index} mydelay={2 * (1 + 0.4 * (index + 1))} >
        <div>
          {rsDesc.period !== null && <p className='`ml-2 px-2 py-1 w-fit bg-[#3e373e] rounded-md`'>{rsDesc.period}</p>}
          {rsDesc.location !== null && <p className='mb-2 px-2 py-1 w-fit italic'>{rsDesc.location}</p>}
          <div>
            {rsDesc.thesis === false 
              ? 
              <ul className='pl-8 py-1 list-disc'>
                <li>{rsDesc.desc}</li>
              </ul>
              : 
              <p className='pl-4'>Thesis: {rsDesc.desc}</p>
            }
          </div>
        </div>
        </Reveal>
      ))}
    </div>
  )
}

export default ResumeDescription