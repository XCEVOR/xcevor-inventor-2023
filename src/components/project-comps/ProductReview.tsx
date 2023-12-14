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
    <>
    {singleDescProduct.map((desc, index) => (
      desc.review !== null && (
        <div className='flex flex-col gap-6 lg:gap-12  '>
          <div className='w-1/2 translate-x-1/2   border-t border-white/40'></div>
          <h2 className='mt-12 mb-0 -lg:mb-6 text-3xl font-bold'>Project Review</h2>

          <div className="relative h-fit mt-4 mb-16 lg:mt-0 p-6 border border-white border-opacity-20 bg-[#221e22]/80 backdrop-blur rounded-xl">
            <div key={index}>
              {/* {desc.review.split("|").map((rev, i) => (
                <p key={i}>{rev}</p>
              ))} */}
              {desc.review.split("|").map((rev, i) => {
                if (rev.match('((h3))')) {
                  rev = rev.replace('((h3))', ''); // ((h3))를 제거
                  return <h3 key={i} className=' text-2xl'>{rev}</h3>; // h3 태그로 렌더링
                } else if (rev.match('((h4))')) {
                  rev = rev.replace('((h4))', '');
                  return <h4 key={i} className=' text-lg'>{rev}</h4>;
                } else if (rev.match('((li))')) {
                  rev = rev.replace('((li))', '');
                  return <li key={i} className=' '>{rev}</li>;
                } else {
                  return <p key={i}>{rev}</p>; // 일반 텍스트는 p 태그로 렌더링
                }
              })}

            </div>
          </div>
        </div>
      )
    ))}
    </>
  )
}

export default ProductReview