import React from 'react';
import Image from 'next/image';

import { ProductImgType, ProductType } from '@/types/types';

const getImgData = async ( titleSlug: string ) => {
  console.log(" @@@@@@@@@@ const getImgData = async ( titleSlug: string ) => ")
  const res = await fetch(`http://localhost:3000/api/product-img/${titleSlug}`,{
    cache:"no-store"
  });
  console.log(res.json);

  if (!res.ok) { throw new Error("Failed!"); }

  return res.json();
}



// const PfolioImage = async ( {params}: {params: {id:string}} ) => {
const PfolioImage = async (  ) => {

  // const singleProduct:ProductType = await getData( params.id );
  // console.log(singleProduct)
  // console.log(params.id)

  // const singleImgProduct:ProductImgType[] = await getImgData( singleProduct.title );

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#ffbf00] md:flex-row md:gap-8 md:items-center">
{/* 
      {singleImgProduct.map((singleImg) => (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={`${process.env.DEV_FILESERVER_URL}${singleImg.img}`}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      ))} */}

      <h1>PfolioImage</h1>
    </div>
  )
}

export default PfolioImage