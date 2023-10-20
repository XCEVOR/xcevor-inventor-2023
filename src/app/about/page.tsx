import React from 'react'
import BackgroundImage from '@/components/BackgroundImage';
import Me from "@/components/about-comps/Me";
import Skills from "@/components/about-comps/Skills";
import Interests from "@/components/about-comps/Interests";
import { PageWrapper } from '@/components/framer-motion/page-wrapper';
import Footer from '@/components/footer/Footer';


const About = () => {
  return (
    <>
      <div className='flex flex-col items-center px-0 lg:px-40 py-28 '>
        <BackgroundImage />

        <PageWrapper>
          <div className='relative flex flex-col  lg:h-[calc(100vh)] w-[90vw] lg:max-w-[80rem] '>
            <Me />
            <Skills />
            <Interests />
          </div>
        </PageWrapper>

      </div>

      {/* <Footer /> */}
    </>
  )
}

export default About