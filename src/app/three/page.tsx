"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Scroll, ScrollControls, Sparkles } from '@react-three/drei';
import BackgroundImageThree from '@/components/BackgroundImageThree';

import { MainText } from '@/components/three-models/text/MainText';
import { TopBracket } from '@/components/three-models/object/TopBracket';
import { BottomSpikes01 } from '@/components/three-models/object/BottomSpikes01';
import { BottomSpikes02 } from '@/components/three-models/object/BottomSpikes02';

import { DescN1Challenge } from '@/components/three-models/text/DescN1Challenge';
import { DescN2Fullstack } from '@/components/three-models/text/DescN2Fullstack';
import { DescN3Teamwork } from '@/components/three-models/text/DescN3Teamwork';

import { DecoApple } from '@/components/three-models/object/DecoApple';
import { DecoMoon } from '@/components/three-models/object/DecoMoon';
import { DecoShuttle } from '@/components/three-models/object/DecoShuttle';
// import { DecoFlask } from '@/components/three-models/object/DecoFlask';
import { DecoBooks } from '@/components/three-models/object/DecoBooks';
import { DecoChatbubble } from '@/components/three-models/object/DecoChatbubble';



const Three = () => {
  return (
    <>
      <BackgroundImageThree />


      <div className='h-screen overflow-hidden'>
        <Canvas>
          <ambientLight intensity={.5} />
          <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
          <Environment preset='studio' />

          {/* <Sparkles size={2} color={"#fff"} scale={[18,10,10]}></Sparkles> */}

          <ScrollControls pages={6} damping={0.1}>


            <Sparkles size={2} color={"#fff"} scale={[18,10,10]}></Sparkles>

            <MainText position={[0, 0, 0.1]}/>

            <DescN1Challenge position={[77, -0, -10.1]} scale={30.8} />
            <DescN2Fullstack position={[-77, -0, -10.1]} scale={30.8} />
            <DescN3Teamwork position={[77, -0, -10.1]} scale={30.8} />
            
            <BottomSpikes01 position={[77, 1, 0.1]} scale={24.2} />
            <BottomSpikes02 position={[-77, -1, 0.1]} scale={24.2} />



            <Scroll>
              <TopBracket position={[2.4, 0, 0]} scale={1} />

              {/* <DecoApple position={[0, -10, -3.1]} scale={0.6} /> */}
              <DecoMoon position={[0, -10, -3.1]} scale={0.1} />
              <DecoShuttle position={[-1, -9, -3.1]} scale={0.2} />
              
              {/* <DecoFlask position={[0, -16, -1.3]} scale={0.3} /> */}
              <DecoBooks position={[0, -16, -1.3]} scale={0.1} />
              
              <DecoChatbubble position={[0, -22, -1.3]} scale={130.2} />

            </Scroll>


          </ScrollControls>
        </Canvas>
      </div>


    </>
  )
}

export default Three
