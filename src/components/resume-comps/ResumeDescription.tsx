import { ResumeDataDescriptionType } from '@/types/types';
import React from 'react'



const getResumeDataDescription = async ( titleSlug: string ) => {
  console.log(" @@@@@@@@@@ const getResumeDataDescription = async ( titleSlug: string ) => ");
  const res = await fetch(`http://localhost:3000/api/resume/${titleSlug}`, {cache: "no-cache"});
  console.log(res.json);
  if (!res.ok) {throw new Error("Failed!");};
  return res.json();
}

const ResumeDescription = async ( {params}:{params: {resumeTitle:string}} ) => {

  console.log(params.resumeTitle)
  const bundleResumeDataDescription:ResumeDataDescriptionType[] = await getResumeDataDescription( params.resumeTitle );

  return (
    <div>
      {/* <h1>ResumeDescription</h1> */}
      {/* <h1>{params.resumeTitle}</h1> */}
      {bundleResumeDataDescription.map((rsDesc, index) => (
        <div>
          {rsDesc.period !== null && <p className='ml-2 px-2 py-1 w-fit bg-gray-800'>{rsDesc.period}</p>}
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
      ))}
    </div>
  )
}

export default ResumeDescription