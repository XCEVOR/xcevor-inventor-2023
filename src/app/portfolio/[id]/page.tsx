import React from 'react';
import Image from 'next/image';

import Price from '@/components/portfolio-comps/Price';
import { singleProduct } from '@/data/dummyData';
import { ProductType } from '@/types/types';



const getData = async ( id: string ) => {
  console.log(" @@@@@@@@@@ const PortfolioPost = async ( {params}: {params: {id:string}} ) => ")
  const res = await fetch(`http://localhost:3000/api/products/${id}`,{
    cache:"no-store"
  });
  console.log(res.json);

  if (!res.ok) { throw new Error("Failed!"); }

  return res.json();
}

// type Props = {
//   params: {id: string}
// }


const PortfolioPost = async ( {params}: {params: {id:string}} ) => {

  const singleProduct:ProductType = await getData( params.id );
  console.log(singleProduct)
  console.log(params.id)

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#ffbf00] md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
          <h1>{singleProduct.title}</h1>
        </div>
      )}

      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>


        {/* <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/> */}
      </div>
    </div>
  )
}

export default PortfolioPost