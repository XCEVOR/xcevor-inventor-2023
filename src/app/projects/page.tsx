import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import { menu, pizzas } from '@/data/dummyData';
import BackgroundImage from '@/components/BackgroundImage';
import { ProductType } from '@/types/types';
import { PageWrapper } from '@/components/framer-motion/page-wrapper';
import { Reveal } from '@/utils/Reveal';
import Footer from '@/components/footer/Footer';



const getData = async () => {
  // console.log(" @@@@@@@@@@ const Portfolio = async () ")
  const dbServerUrl = process.env.DEV_DBSERVER_URL || "http://localhost:3000";
  const res = await fetch(`${dbServerUrl}/api/products`, {
  cache:"no-store"
  });

  if (!res.ok) { throw new Error("Failed!"); }

  return res.json();
}


const Portfolio = async () => {

  const featureProducts:ProductType[] = await getData();

  return (
    <>
      <BackgroundImage />
      <div className='flex flex-col items-center  h-fit px-0 lg:px-40 py-28 '>
      

        <PageWrapper>
        <h1 className="relative mb-8  text-3xl font-bold uppercase lg:text-4xl  text-[#edf048]">Projects</h1>
          {/* <div className='flex text-[#FAD02C]'>
            {pizzas.map((item) => (
              <Link className='' href={`/product/${item.id}`} key={item.id}>
                {item.img && (
                  <div className="relative">
                    <Image src={item.img} alt='' fill />
                  </div>
                )}
              </Link>
            ))}
          </div> */}
          
          {/* <div className='flex items-center justify-center  '> */}
          {/* <div className='flex flex-col items-center  h-fit px-0 lg:px-40 py-28 '> */}
            {/* <div className="grid lg:grid-cols-2 2xl:grid-cols-3 w-full xl:max-w-fit"> */}
            <div className='relative grid gap-2 sm:gap-8 grid-cols-2 lg:grid-cols-3  w-[90vw] lg:max-w-[80rem] '>
              {featureProducts.map((item, index) => (
                <Reveal key={index} mydelay={1.5 * (1 + 0.4 * index)} >
                {/* <div className='sm:p-8'> */}
                <div className=''>



                    {/* IMAGE CONTAINER */}
                    {item.img && (
                      // <div className="relative flex items-center justify-center h-full">
                        // <Link className="w-fit h-[90vw] sm:max-h-[90vw] lg:max-h-[25vw] aspect-square   border-r-2 border-b-2 border-[#F8EFE4]/[2%]  flex flex-col justify-between group" href={`/projects/${item.id}`} key={item.id} >
                        <Link className="aspect-square   border-r-2 border-b-2 border-[#F8EFE4]/[2%]  flex flex-col justify-between group" href={`/projects/${item.id}`} key={item.id} >
                        {/* <div className="relative flex items-center justify-center h-[100%] aspect-square rounded-3xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-200 border-opacity-10 transition-all duration-700 hover:scale-105"> */}
                        <div className="relative flex items-center justify-center h-[100%] aspect-square rounded-3xl   bg-[#221e22] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-200 border-opacity-10 transition-all duration-700 hover:scale-105">
                          {/* <div className="relative h-[86%] aspect-square rounded-2xl overflow-hidden"> */}
                          <div className="relative h-[86%] aspect-square  ">
                            <Image src={`${process.env.DEV_FILESERVER_URL}${item.img}`} alt="" fill className='object-contain  '/>
                            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center bg-[#221e22]/[90%] text-2xl text-[#F8EFE4] font-semibold">
                              <div className='flex flex-col items-center justify-center'>
                                <p>{item.title}</p>
                                <p className='mt-2 text-[1rem]'>{item.catSlug.toUpperCase()}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        </Link>
                      // </div>
                    )}


                </div>
                </Reveal>
              ))}
            </div>
          {/* </div> */}

          {/* <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
          {menu.map((category) => (
              <Link
                href={`/menu/${category.slug}`}
                key={category.id}
                className="w-full h-1/3 bg-cover p-8 md:h-1/2"
                style={{ backgroundImage: `url(${category.img})` }}
              >
                <div className={`text-${category.color} w-1/2`}>
                  <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
                  <p className="text-sm my-8">{category.desc}</p>
                  <button className={`hidden 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
                </div>
              </Link>
            ))}
          </div> */}
        </PageWrapper>
      </div>
      <Footer />
    </>
  )
}

export default Portfolio