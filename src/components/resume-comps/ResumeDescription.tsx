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
      <h1>ResumeDescription</h1>
      <h1>{params.resumeTitle}</h1>
      {bundleResumeDataDescription.map((rsDesc) => (
        <h1>{rsDesc.desc}</h1>
      ))}
    </div>
  )
}

export default ResumeDescription