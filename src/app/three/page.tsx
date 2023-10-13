"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Scroll, ScrollControls, Sparkles } from '@react-three/drei';
import BackgroundImage from '@/components/BackgroundImage';

import { MainText } from '@/components/three-models/text/MainText';
import { HeaderBracket } from '@/components/three-models/object/HeaderBracket';


const Three = () => {
  return (
    <>
      <BackgroundImage />
      <div>Three</div>


      <div className='h-screen overflow-hidden'>
        <Canvas>
          <ambientLight intensity={.5} />
          <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
          <Environment preset='studio' />

          {/* <Sparkles size={2} color={"#fff"} scale={[18,10,10]}></Sparkles> */}

          <ScrollControls pages={6} damping={0.1}>
            <Sparkles size={2} color={"#fff"} scale={[18,10,10]}></Sparkles>

            <MainText position={[0, 0, 0.1]}/>
            

            <Scroll>
              <HeaderBracket position={[2.4, 0, 0]} scale={1} />
            </Scroll>
            
          </ScrollControls>
        </Canvas>
      </div>


      <div>Three</div>
    </>
  )
}

export default Three