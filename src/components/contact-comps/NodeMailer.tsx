"use client";

import React, { useState } from 'react'
import { ChakraProvider, Container, FormControl, FormLabel, FormErrorMessage, Input, Textarea, Button, useToast, color,  } from '@chakra-ui/react'
import theme from './theme';
import { touchedFields, targetType, tempDataType } from '@/types/types-cantact';

import { sendContactForm } from './api';




const initValues = { senderName: "", senderEmail: "", senderSubject: "", senderMessage: "" };
const initState = { values: initValues, isLoading: false };
const initTouched = {
  senderName: false,
  senderEmail: false,
  senderSubject: false,
  senderMessage: false,

  touchedName: false,
  touchedEmail: false,
  touchedSubject: false,
  touchedMessage: false,
}



const NodeMailer = () => {
  const [state, setState] = useState(initState);
  const { values, isLoading } = state;
  const [touched, setTouched] = useState<touchedFields>(initTouched);
  const UseTopDownToast = useToast();
  

  const onBlur:any = ({target}:targetType) => setTouched((prev) => ({ ...prev, [target.name]:true }));

  const handleChange:any = ({ target }: targetType) => {
    setState((prev) => ({
      ...prev, values: {...prev.values, [target.name]: target.value,},
      isLoading: false,
    }))
  }

  const onSubmit = async () => {
    console.log(values.senderName)
    setState((prev) => ({
      ...prev, isLoading: true,
    }));

    // const myData:tempDataType = {
    //   userEmailAddress: "test12@testtsettetfasdfasdf.com",
    //   userTitle: "2 한글한글 Title from NEXTJS",
    //   userContent: "한글 Content from NEXTJS.. You should.."
    // }

    try {
      await sendContactForm(values);
      setTouched(initTouched);
      setState(initState);
      UseTopDownToast({
        title: "Message sent.",
        status: "success",
        duration: 3000,
        position: "top",
      })
    } catch (error) {
      UseTopDownToast({
        title: "Error",
        status: "error",
        duration: 3000,
        position: "top",
      })
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }))
    }
    
  }



  return (

    
    <ChakraProvider theme={theme} resetCSS={false} disableGlobalStyle={true}>
      <Container >
        <h1 className="relative mb-8  text-3xl font-bold uppercase lg:text-4xl  text-[#edf048]">Contact Me</h1>

        <div className='flex flex-col gap-4  p-8 lg:py-12 lg:px-16 mt-8    border border-white/20  bg-[#221e22]/80 backdrop-blur rounded-xl'>

            <FormControl isRequired isInvalid={touched.senderName && !values.senderName} >
              <FormLabel>Name</FormLabel>
              <Input type="text" name='senderName' errorBorderColor='red.300' value={values.senderName} onChange={handleChange} onBlur={onBlur} />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.senderEmail && !values.senderEmail}>
              <FormLabel>Email</FormLabel>
              <Input type="email" name='senderEmail' value={values.senderEmail} onChange={handleChange} onBlur={onBlur} />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.senderSubject && !values.senderSubject}>
              <FormLabel>Subject</FormLabel>
              <Input type="text" name='senderSubject' value={values.senderSubject} onChange={handleChange} onBlur={onBlur} />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.senderMessage && !values.senderMessage}>
              <FormLabel>Message</FormLabel>
              <Textarea name='senderMessage' rows={4} value={values.senderMessage} onChange={handleChange} onBlur={onBlur} />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <Button
              variant="outline"
              colorScheme="yellow"
              isLoading={isLoading}
              isDisabled={
                !values.senderName || !values.senderEmail || !values.senderEmail.includes("@") || !values.senderSubject || !values.senderMessage
              }
              onClick={onSubmit}
              className='mt-4'
            >
              Submit
            </Button>

        </div>
      </Container>
    </ChakraProvider>
  )
}

export default NodeMailer