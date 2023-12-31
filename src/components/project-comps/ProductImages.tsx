import React from 'react';
import Image from 'next/image';

import { ProductImgType, ProductType } from '@/types/types';
import { Reveal } from '@/utils/Reveal';

const getImgData = async ( titleSlug: string ) => {
  // console.log(" @@@@@@@@@@ const getImgData = async ( titleSlug: string ) => ")
  const dbServerUrl = process.env.DEV_DBSERVER_URL || "http://localhost:3000";
  const res = await fetch(`${dbServerUrl}/api/product-img/${titleSlug}`, {
    cache:"no-store"
  });
  // console.log(res.json);

  if (!res.ok) { throw new Error("Failed!"); }

  return res.json();
}



const ProductImages = async ( {params}: {params: {id:string, titleSlug:string}} ) => {
// const PfolioImage = async (  ) => {

  // const singleProduct:ProductType = await getData( params.id );
  // console.log(singleProduct)
  // console.log(params.id)

  const singleImgProduct:ProductImgType[] = await getImgData( params.titleSlug );

  return (
    // <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#edf048] md:flex-row md:gap-8 md:items-center">
    <div className='flex flex-col gap-6 lg:gap-12  '>
      {/* <div className='w-1/2 translate-x-1/2   border-t border-white/40'></div> */}
      <h2 className='mt-12 mb-0 -lg:mb-6 text-3xl font-bold'>Project Screenshots</h2>

      {/* {singleImgProduct.map((singleImg) => (
        <div className="relative flex flex-col w-full h-2/3 gap-10">
          <Image
            src={`${process.env.DEV_FILESERVER_URL}${singleImg.img}`}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      ))} */}
      {singleImgProduct.slice(1).map((singleImg, index) => (
        <Reveal key={index} mydelay={1}>
        <div className="relative aspect-[16/9]">
          <Image
            src={`${process.env.DEV_FILESERVER_URL}${singleImg.img}`}
            alt=""
            className=" object-contain"
            fill
          />
        </div>
        </Reveal>
      ))}
      

      {/* 
      <h2>PfolioImage</h2>
      <h2>{params.id}</h2>
      <h2>{params.titleSlug}</h2>
      */}

    </div>
  )
}

export default ProductImages