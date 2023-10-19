import React from 'react';
import Image from 'next/image';

import { ProductImgType, ProductType } from '@/types/types';

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
    // <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#FAD02C] md:flex-row md:gap-8 md:items-center">
    <div className='flex flex-col gap-8 lg:gap-20  w-[80vw] lg:max-w-[80rem]  xl:w-[76vw] pt-8'>

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
        <div key={index} className="relative aspect-[3/2]">
          <Image
            src={`${process.env.DEV_FILESERVER_URL}${singleImg.img}`}
            alt=""
            className=" object-contain"
            fill
          />
        </div>
      ))}
      

      {/* 
      <h1>PfolioImage</h1>
      <h1>{params.id}</h1>
      <h1>{params.titleSlug}</h1>
      */}

    </div>
  )
}

export default ProductImages