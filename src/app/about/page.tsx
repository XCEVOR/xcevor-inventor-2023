import React from 'react'
import BackgroundImage from '@/components/BackgroundImage';
import Me from "@/components/about-comps/Me";
import Skills from "@/components/about-comps/Skills";
import Interests from "@/components/about-comps/Interests";


const About = () => {
  return (
    <div>
      <BackgroundImage />
      <Me />
      <Skills />
      <Interests />
    </div>
  )
}

export default About