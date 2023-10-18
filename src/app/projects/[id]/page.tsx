import React from 'react';
import Image from 'next/image';

import Price from '@/components/portfolio-comps/Price';
import { singleProduct } from '@/data/dummyData';
import { ProductDescType, ProductImgType, ProductType } from '@/types/types';
import PfolioImage from '@/components/portfolio-comps/PfolioImage';
import { PageWrapper } from '@/components/framer-motion/page-wrapper';
import BackgroundImage from '@/components/BackgroundImage';
import Footer from '@/components/footer/Footer';



const getData = async ( id: string ) => {
  // console.log(" @@@@@@@@@@ const PortfolioPost = async ( {params}: {params: {id:string}} ) => ")
  const dbServerUrl = process.env.DEV_DBSERVER_URL || "http://localhost:3000";
  const res = await fetch(`${dbServerUrl}/api/products/${id}`, {
    cache:"no-store"
  });
  // console.log(res.json);

  if (!res.ok) { throw new Error("Failed!"); }

  return res.json();
}

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

// type Props = {
//   params: {id: string}
// }


const ProjectPost = async ( {params}: {params: {id:string}} ) => {

  const singleProduct:ProductType = await getData( params.id );
  // console.log(singleProduct)
  // console.log(params.id)

  const singleDescProduct:ProductDescType[] = await getDescData( singleProduct.title );
  // console.log(singleDescProduct)

  const singleImgProduct:ProductImgType[] = await getImgData( singleProduct.title );

  return (
    <>
      <BackgroundImage />

      <div className='flex flex-col items-center px-20 lg:px-40 py-28'>
        <PageWrapper>
          <div className="relative flex flex-col justify-around h-[calc(100vh-10rem)] w-[80vw]  text-[#FAD02C] md:flex-row md:gap-8 md:items-center">
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
                index === 0 && <div className="relative flex gap-4 w-full aspect-[2/3]" key={index}>
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
            <div className="md:w-1/3 h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8  p-4 bg-[#0A0A0A]/80 backdrop-blur rounded-xl">
              <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
              {/* <p>{singleProduct.desc}</p>
              <p>{singleProduct.desc}</p>
              <p>{singleProduct.desc}</p>
              <p>{singleProduct.desc}</p> */}
              <h1>xxx  xxx</h1>
                {singleDescProduct.map((desc, index) => (
                  <div key={index} >
                    <h1>{desc.id}</h1>
                    <h1>{desc.class}</h1>
                    <h1>{desc.tool.split("/").map((t, idx) => (<p key={idx}>{idx} {t}</p>))}</h1>
                    <h1>{desc.url}</h1>
                    <h1>{desc.github}</h1>
                    <h1>{desc.desc}</h1>
                    <h1>{desc.titleSlug}</h1>
                  </div>
                
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


        </PageWrapper>




        {/* <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#FAD02C] md:flex-row md:gap-8 md:items-center"> */}
        <div className="relative flex flex-col h-fit max-w-fit">

            {/* <img src="https://picsum.photos/1920/1080" alt="" className="object-contain max-w-4xl"/> */}
            <PfolioImage params={{ id: params.id, titleSlug: singleProduct.title }} />

        </div>

      </div>

      <Footer />
    </>
  )
}

export default ProjectPost