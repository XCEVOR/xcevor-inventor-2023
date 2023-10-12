"use client";

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion';



interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  mydelay?: number;
}

const fadeInAnimationVariants = {
  myhidden: {
    opacity: 0,
    y: 100,
  },

  // myvisible: {
  //   opacity: 1,
  //   y: 0,
  //   transition: {
  //     delay: 0.3,
  //   },
  // },
  myvisible: (mydelay: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: ( mydelay ? 0.3 * mydelay : 0.3 ),
      },
    };
  },
};

export const Reveal = ({ children, width = "fit-content", mydelay }: Props ) => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  // useEffect(() => {
  //   console.log(isInView);
  // }, [isInView]);


  return (
    // <div style={{ position: "relative", width, overflow: "hidden" }}>
    <div >
      <motion.div
        // variants={{
        //   myhidden: { opacity: 0, y: 75 },
        //   myvisible: { opacity: 1, y: 0 },
        // }}
        variants={fadeInAnimationVariants}

        initial= "myhidden"
        // animate= "myvisible"
        
        whileInView="myvisible"
        viewport={{ once: true }}
        
        // transition={{ duration: 0.5, delay: ( mydelay ? 0.3 * mydelay : 0.3 ) }}
        custom={mydelay}
      >
        {children}
      </motion.div>
    </div>
  )
}
