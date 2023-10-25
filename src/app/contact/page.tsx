import BackgroundImage from '@/components/BackgroundImage'
import NodeMailer from '@/components/contact-comps/NodeMailer'
import { PageWrapper } from '@/components/framer-motion/page-wrapper'
import React from 'react'

const ContactMe = () => {
  return (
    <>
      <div className='flex flex-col items-center  h-fit px-0 lg:px-40 py-28 '>
        <BackgroundImage />
        {/* <div className='relative flex flex-col  lg:h-[calc(100vh-9.4rem)] w-[90vw] lg:max-w-[80rem] '> */}
        <div className='relative flex flex-col  w-[90vw] lg:max-w-[80rem] '>
          <PageWrapper>
            <NodeMailer />
          </PageWrapper>
        </div>
      </div>
    </>
  )
}

export default ContactMe