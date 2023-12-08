import React from 'react';
import Image from 'next/image';

import { ProductDescType, ProductImgType, ProductType } from '@/types/types';
import { Reveal } from '@/utils/Reveal';

const getDescData = async ( titleSlug: string ) => {
    // console.log(" @@@@@@@@@@ const getDescData = async ( titleSlug: string ) => ", titleSlug)
    const dbServerUrl = process.env.DEV_DBSERVER_URL || "http://localhost:3000";
    const res = await fetch(`${dbServerUrl}/api/product-desc/${titleSlug}`, {
      cache:"no-store"
    });
    // console.log(res.json);
  
    if (!res.ok) { throw new Error("Failed!"); }
  
    return res.json();
  }



const ProductReview = async ( {params}: {params: {id:string, titleSlug:string}} ) => {
// const PfolioImage = async (  ) => {

  // const singleProduct:ProductType = await getData( params.id );
  // console.log(singleProduct)
  // console.log(params.id)

  const singleDescProduct:ProductDescType[] = await getDescData( params.titleSlug );

  return (
    // <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#edf048] md:flex-row md:gap-8 md:items-center">
    <div className='flex flex-col gap-6 lg:gap-12  '>
      <div className='w-1/2 translate-x-1/2   border-t border-white/40'></div>
      <h3 className='mt-12 mb-0 -lg:mb-6 text-3xl font-bold'>Project Review</h3>

        <p>{params.titleSlug}</p>
      {singleDescProduct.map((desc, index) => (
        <p key={index}>{desc.review}</p>
        ))
      }

    </div>
  )
}

export default ProductReview