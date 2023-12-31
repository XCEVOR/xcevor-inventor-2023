/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 phantoms.glb --transform
*/

import React, { useRef,useLayoutEffect } from 'react'
import { useGLTF,useScroll } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import gsap from 'gsap'

export function BottomText01(props) {
  const { nodes, materials } = useGLTF('./models/object/bottom-believe-transformed.glb')
  const model3d = useRef()
  const scroll = useScroll()
  const tl = useRef()

  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(()=> {
    tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})

    tl.current
    .to(model3d.current.position, {x: 1.7}, 18.0)
    .to(model3d.current.position, {y: 1.05}, 18.0)
 

    // .to(model3d.current.rotation, {y: 0}, 20)   
    // .to(model3d.current.rotation, {x: 0}, 20) 
    .to(model3d.current.position, {x: 1.7}, 20)  

  },[])
  
  return (
    <group {...props} dispose={null} ref={model3d}>      
      <mesh geometry={nodes.believe.geometry} material={nodes.believe.material} position={[0, 0, 0]} rotation={[1*Math.PI/2, 0, 0]} scale={[1, 1, 1]}/>
    </group>
  )
}

useGLTF.preload('./models/object/bottom-believe-transformed.glb')
