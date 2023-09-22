import React from 'react'
import BackgroundImage from '@/components/BackgroundImage';
import Me from "@/components/about-comps/Me";
import Skills from "@/components/about-comps/Skills";
import Interests from "@/components/about-comps/Interests";
import { PageWrapper } from '@/components/framer-motion/page-wrapper';


const About = () => {
  return (
    <div>
      <BackgroundImage />

      <PageWrapper>
        <Me />
        <Skills />
        <Interests />
      </PageWrapper>
    </div>
  )
}

export default About