import React from 'react';
import Image from 'next/image';

import Price from '@/components/portfolio-comps/Price';
import { singleProduct } from '@/data/dummyData';
import { ProductDescType, ProductImgType, ProductType } from '@/types/types';
import PfolioImage from '@/components/portfolio-comps/PfolioImage';



const getData = async ( id: string ) => {
  console.log(" @@@@@@@@@@ const PortfolioPost = async ( {params}: {params: {id:string}} ) => ")
  const res = await fetch(`http://localhost:3000/api/products/${id}`,{
    cache:"no-store"
  });
  console.log(res.json);

  if (!res.ok) { throw new Error("Failed!"); }

  return res.json();
}

const getDescData = async ( titleSlug: string ) => {
  console.log(" @@@@@@@@@@ const getDescData = async ( titleSlug: string ) => ")
  const res = await fetch(`http://localhost:3000/api/product-desc/${titleSlug}`,{
    cache:"no-store"
  });
  console.log(res.json);

  if (!res.ok) { throw new Error("Failed!"); }

  return res.json();
}

const getImgData = async ( titleSlug: string ) => {
  console.log(" @@@@@@@@@@ const getImgData = async ( titleSlug: string ) => ")
  const res = await fetch(`http://localhost:3000/api/product-img/${titleSlug}`,{
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

  const singleDescProduct:ProductDescType[] = await getDescData( singleProduct.title );
  console.log(singleDescProduct)

  const singleImgProduct:ProductImgType[] = await getImgData( singleProduct.title );

  return (
    <div>
      <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#ffbf00] md:flex-row md:gap-8 md:items-center">
        {/* IMAGE CONTAINER */}
        {/* {singleProduct.img && (
          <div className="relative w-full h-1/2 md:h-[70%]">
            <Image
              src={`${process.env.DEV_FILESERVER_URL}${singleProduct.img}`}
              alt=""
              className="object-contain"
              fill
            />
          </div>
        )} */}

        <div className="md:w-2/3 h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
          {/* {singleImgProduct.map((singleImg) => (
            <div className="relative w-full h-1/2 md:h-[70%]">
              <Image
                src={`${process.env.DEV_FILESERVER_URL}${singleImg.img}`}
                alt=""
                className="object-contain"
                fill
              />
            </div>
          ))} */}
          {singleImgProduct.map((singleImg, index) => (
            index === 0 && <div className="relative w-full h-1/2 md:h-[70%]">
              <Image
                src={`${process.env.DEV_FILESERVER_URL}${singleImg.img}`}
                alt=""
                className="object-contain"
                fill
              />
            </div>
          ))}
        </div>
      

      


        {/* TEXT CONTAINER */}
        <div className="md:w-1/3 h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
          <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
          {/* <p>{singleProduct.desc}</p>
          <p>{singleProduct.desc}</p>
          <p>{singleProduct.desc}</p>
          <p>{singleProduct.desc}</p> */}
          <h1>xxx  xxx</h1>
            {singleDescProduct.map((desc) => (
            <h1>{desc.desc}</h1>
            ))}
          <h1>xxx  xxx</h1>


          {/* <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/> */}

          {/* <PfolioImage /> */}
          {/* <PfolioImage params={{ id: params.id, titleSlug: singleProduct.title }} /> */}
        </div>
        {/* <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
          <PfolioImage params={{ id: params.id, titleSlug: singleProduct.title }} />
        </div> */}
      </div>

      <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#ffbf00] md:flex-row md:gap-8 md:items-center">
        <div className="h-full w-full flex flex-col gap-4 ">
          <PfolioImage params={{ id: params.id, titleSlug: singleProduct.title }} />
        </div>
      </div>
    </div>
  )
}

export default PortfolioPost