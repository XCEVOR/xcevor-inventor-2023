import React from 'react';
import ResumeData from '@/data/resumeData';

const Resume = () => {
  return (
    <div className='flex items-center justify-center'>
      <section id="resume" className="resume">
        <div className="container px-10 ">
          <div className="m-5">
            <h2>Resume</h2>
            <p className='text-4xl uppercase font-bold'>Check My Resume</p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 relative p-5">
              <h3 className="text-2xl font-bold mt-5 mb-5 text-white">Developer Experience</h3>
              <div className="pb-0 pl-5 border-l-2 border-[#ffbf00]">
                <div className="p-3 rounded-full absolute left-1 bg-[#ffbf00] "></div>
                <h4 className="text-lg font-semibold uppercase text-[#ffbf00] mb-2">{ResumeData.name}</h4>
                <p>
                  <em className="text-gray-300">{ResumeData.summary}</em>
                </p>
                
                  <ul className="pl-5">
                    <li className="pb-2 text-gray-300">{ResumeData.address}</li>
                    <li className="pb-2 text-gray-300">{ResumeData.phone}</li>
                    <li className="pb-2 text-gray-300">{ResumeData.email}</li>
                  </ul>
                
              </div>
              <h3 className="text-2xl font-bold mt-5 mb-5 text-white">Education</h3>
              {ResumeData.education.map((edu, index) => (
                <div className="pb-0 pl-5 border-l-2 border-[#ffbf00]" key={index}>
                  <div className="p-3 rounded-full absolute left-1 bg-[#ffbf00] "></div>
                  <h4 className="text-lg font-semibold uppercase text-[#ffbf00] mb-2">{edu.degree}</h4>
                  <h5 className="bg-opacity-15 py-1 px-3 inline-block rounded-sm font-semibold mb-2 bg-[#222222]">{edu.date}</h5>
                  <p>
                    <em className="text-gray-300">{edu.school}</em>
                  </p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="">Professional Experience</h3>
              {ResumeData.experience.map((exp, index) => (
                <div className="" key={index}>
                  <h4>{exp.position}</h4>
                  <h5>{exp.date}</h5>
                  <p>
                    <em>{exp.company}</em>
                  </p>
                  
                    <ul>
                      {exp.duties.map((duty, i) => (
                        <li key={i}>{duty}</li>
                      ))}
                    </ul>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume