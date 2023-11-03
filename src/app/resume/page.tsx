import React from 'react';

import ResumeInteralData from '@/data/resumeData';
import { menu, pizzas } from '@/data/dummyData';
import BackgroundImage from '@/components/BackgroundImage';
import { PageWrapper } from '@/components/framer-motion/page-wrapper';
import { ResumeDataType } from '@/types/types';
import ResumeDescription from '@/components/resume-comps/ResumeDescription';
import { Reveal } from '@/utils/Reveal';
import Footer from '@/components/footer/Footer';





// type ResumeData = {
//   classification: string;
//   title: string;
// }[];


const getData = async () => {
  // console.log(" @@@@@@@@@@ const resumeData:ResumeDataType = await getData(); ")
  const dbServerUrl = process.env.DEV_DBSERVER_URL || "http://localhost:3000";
  const res = await fetch(`${dbServerUrl}/api/resume`, {cache:"no-cache"});
  // console.log("res", res.json);  // res [Function: json]
  if (!res.ok) {throw new Error("Failed!");};
  return res.json();
}


const Resume = async () => {

  const resumeData:ResumeDataType[] = await getData();

  const groupedData = resumeData.reduce<{ [key: string]: string[] }>((accumulator, item) => {
    if (!accumulator[item.classification]) {
      accumulator[item.classification] = [];
    }
    accumulator[item.classification].push(item.title);
    return accumulator;
  }, {});
  // console.log("groupData", groupedData)

  let prevClassification: string | null = null;


  return (
    <>
      <div className='flex flex-col items-center  h-fit px-0 lg:px-40 py-28 '>
        <BackgroundImage />
        <div className='relative flex flex-col  w-[90vw] lg:max-w-[80rem] '>
          <PageWrapper>
            <div className='flex items-center justify-center'>
              <section id="resume" className="resume">
                <div className="container ">
                  <div className="">
                    {/* <h2>Resume</h2> */}
                    <h1 className="relative mb-8  text-3xl font-bold uppercase lg:text-4xl  text-[#edf048]">Check My Resume</h1>
                  </div>
                  


                    {/* {resumeData.map((rsdata) => (
                      <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 relative p-5">
                          <h3 className="text-2xl font-bold mt-5 mb-5 text-[#F8EFE4]">{rsdata.classification}</h3>

                          <div>
                            <h4 className="text-lg font-semibold uppercase text-[#edf048] mb-2">{rsdata.title}</h4>
                            
                            <ResumeDescription params={ {resumeTitle: rsdata.title} } />
                          </div>

                        </div>
                      </div>
                    ))} */}

                    {/* {resumeData.map((rsdata) => (
                      <div className="flex flex-wrap" key={rsdata.id}>
                        <div className="w-full lg:w-1/2 relative p-5">
                          <div>
                            {rsdata.classification !== prevClassification && (
                              <h3 className="text-2xl font-bold mt-5 mb-5 text-[#F8EFE4]">{rsdata.classification}</h3>
                            )}
                            {prevClassification = rsdata.classification}
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold uppercase text-[#edf048] mb-2">{rsdata.title}</h4>
                            <ResumeDescription params={{ resumeTitle: rsdata.title }} />
                          </div>
                        </div>
                      </div>
                    ))} */}


                  {/* {Object.keys(groupedData).map((classification) => (
                    <div className="flex flex-wrap" key={classification}>
                      <div className="w-full lg:w-1/2 relative p-5">
                        <h3 className="text-2xl font-bold mt-5 mb-5 text-[#F8EFE4]">{classification}</h3>
                        {groupedData[classification].map((title) => (
                          <div key={title}>
                            <h4 className="text-lg font-semibold uppercase text-[#edf048] mt-6 mb-2">{title}</h4>
                            <ResumeDescription params={{ resumeTitle: title }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))} */}



                  <div className='flex flex-col gap-8 lg:flex-row'>
                    <div className='lg:order-first w-full'>
                    {Object.keys(groupedData).map((classification, index) => (
                      index === 0 && 
                      <Reveal key={index} mydelay={1 * (1 + 0.4 * (index + 1))} >
                        <div className="flex flex-wrap    border border-white border-opacity-20  bg-[#221e22]/80 backdrop-blur rounded-xl" key={classification}>
                          <div className="w-full relative p-4">
                            <h3 className="mt-4 mb-0  text-2xl text-center font-bold ">{classification}</h3>
                            {groupedData[classification].map((title) => (
                              <div key={title}>
                                <h4 className={title !== "Personal Exp." ? "text-lg font-semibold uppercase text-[#edf048] mt-6 mb-2" : "text-lg font-semibold uppercase text-[#edf048] mt-16 mb-2"}>{title}</h4>
                                <ResumeDescription params={{ resumeTitle: title }} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                    </div>
                    <div className='lg:order-last w-full'>
                    {Object.keys(groupedData).map((classification, index) => (
                      index !== 0 && 
                      <Reveal key={index} mydelay={1 * (1 + 0.4 * (index + 1))} >
                        <div className="flex flex-wrap mb-8    border border-white border-opacity-20  bg-[#221e22]/80 backdrop-blur rounded-xl" key={classification}>
                          <div className="w-full relative p-4">
                            <h3 className="mt-4 mb-0   text-2xl text-center font-bold ">{classification}</h3>
                            {groupedData[classification].map((title) => (
                              <div key={title}>
                                <h4 className="text-lg font-semibold uppercase text-[#edf048] mt-6 mb-2">{title}</h4>
                                <ResumeDescription params={{ resumeTitle: title }} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                    </div>
                  </div>






                  {/* <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 relative p-5">
                      <h3 className="text-2xl font-bold mt-5 mb-5 text-[#F8EFE4]">Developer Experience</h3>
                      <div className="pb-0 pl-5 border-l-2 border-[#edf048]">
                        <div className="p-3 rounded-full absolute left-1 bg-[#edf048] "></div>
                        <h4 className="text-lg font-semibold uppercase text-[#edf048] mb-2">{ResumeInteralData.name}</h4>
                        <p>
                          <em className="text-gray-300">{ResumeInteralData.summary}</em>
                        </p>
                        
                          <ul className="pl-5">
                            <li className="pb-2 text-gray-300">{ResumeInteralData.address}</li>
                            <li className="pb-2 text-gray-300">{ResumeInteralData.phone}</li>
                            <li className="pb-2 text-gray-300">{ResumeInteralData.email}</li>
                          </ul>
                        
                      </div>
                      <h3 className="text-2xl font-bold mt-5 mb-5 text-[#F8EFE4]">Education</h3>
                      {ResumeInteralData.education.map((edu, index) => (
                        <div className="pb-0 pl-5 border-l-2 border-[#edf048]" key={index}>
                          <div className="p-3 rounded-full absolute left-1 bg-[#edf048] "></div>
                          <h4 className="text-lg font-semibold uppercase text-[#edf048] mb-2">{edu.degree}</h4>
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
                      {ResumeInteralData.experience.map((exp, index) => (
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
                  </div> */}





                </div>
              </section>
            </div>
          </PageWrapper>

        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default Resume