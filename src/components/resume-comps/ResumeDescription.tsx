import { ResumeDataDescriptionType } from '@/types/types';
import { Reveal } from '@/utils/Reveal';
import Link from 'next/link';
import React from 'react'



const getResumeDataDescription = async ( titleSlug: string ) => {
  // console.log(" @@@@@@@@@@ const getResumeDataDescription = async ( titleSlug: string ) => ");
  const dbServerUrl = process.env.DEV_DBSERVER_URL || "http://localhost:3000";
  const res = await fetch(`${dbServerUrl}/api/resume/${titleSlug}`, {cache: "no-store"});
  // console.log(res.json);
  if (!res.ok) {throw new Error("Failed!");};
  return res.json();
}

const ResumeDescription = async ( {params}:{params: {resumeTitle:string}} ) => {

  // console.log(params.resumeTitle)
  const bundleResumeDataDescription:ResumeDataDescriptionType[] = await getResumeDataDescription( params.resumeTitle );
  // console.log(bundleResumeDataDescription)

  return (
    <div>
      {/* <h1>ResumeDescription</h1> */}
      {/* <h1>{params.resumeTitle}</h1> */}
      {bundleResumeDataDescription.map((rsDesc, index) => (
        <Reveal key={index} mydelay={2 * (1 + 0.4 * (index + 1))} >
        <div className={rsDesc.titleSlug !== "Certificate" ? '' : 'mb-6'}>
          {rsDesc.period !== null && rsDesc.titleSlug !== "Certificate" && <p className='`ml-2 px-2 py-1 w-fit bg-[#3e373e] rounded-md`'>{rsDesc.period}</p>}
          {rsDesc.period !== null && rsDesc.titleSlug === "Certificate" && <p className='`ml-2 px-2 py-1 w-fit bg-[#3e373e] rounded-md`'>aaa {rsDesc.period}</p>}
          {rsDesc.location !== null && <p className='mb-2 px-2 py-1 w-fit italic'>{rsDesc.location}</p>}
          <div>
            {rsDesc.thesis === false 
              ? (rsDesc.titleSlug === "Certificate" || rsDesc.titleSlug === "Curriculum Vitae" 
                  ? <ul className='pl-8 py-1 list-disc'><li>aa {rsDesc.desc} <Link href={rsDesc.note || 'fallback-url'} passHref legacyBehavior><a className='hover:text-[#edf048] transition-colors duration-300 ease-in-out ' target='_blank'>{rsDesc.note}</a></Link></li></ul>
                  : <ul className='pl-8 py-1 list-disc'><li>{rsDesc.desc}</li></ul>
                )
              : <p className='pl-4'>Thesis: {rsDesc.desc}</p>
            }
          </div>
        </div>
        </Reveal>
      ))}
    </div>
  )
}

export default ResumeDescription