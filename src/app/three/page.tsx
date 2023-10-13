"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Scroll, ScrollControls, Sparkles } from '@react-three/drei';
import BackgroundImage from '@/components/BackgroundImage';



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

          
          <ScrollControls pages={6} damping={0.1}>
            <Sparkles size={2} color={"#fff"} scale={[18,10,10]}></Sparkles>
          </ScrollControls>
        </Canvas>
      </div>


      <div>Three</div>
    </>
  )
}

export default Three