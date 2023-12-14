import React from 'react';
import Image from 'next/image';

import Price from '@/components/project-comps/Price';
import { singleProduct } from '@/data/dummyData';
import { ProductDescType, ProductImgType, ProductType } from '@/types/types';
import ProductImages from '@/components/project-comps/ProductImages';
import ToolImage from "@/components/project-comps/ToolImage";
import { PageWrapper } from '@/components/framer-motion/page-wrapper';
import BackgroundImage from '@/components/BackgroundImage';
import Footer from '@/components/footer/Footer';
import ProductReview from '@/components/project-comps/ProductReview';



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

      <div className='flex flex-col items-center  h-fit px-0 lg:px-40 py-28 '>
        <PageWrapper>
        <div className='relative flex flex-col  w-[90vw] lg:max-w-[80rem]  lg:h-[calc(100vh-7rem)]'>
        <h1 className="relative mb-2  text-3xl font-bold uppercase lg:text-4xl  text-[#edf048]">{singleProduct.title}</h1>
          <div className="relative flex flex-col justify-start h-full  mt-8   lg:flex-row lg:gap-8 ">
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
            

            <div className="relative lg:w-2/5 h-full flex flex-col gap-4  lg:h-[70%] lg:gap-6 xl:gap-8">
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
                index === 0 && <div key={index} className=' aspect-square'>
                  <div className="relative flex items-center justify-center h-[100%]    border border-white border-opacity-20  bg-[#221e22]/80 backdrop-blur rounded-xl " >
                    <div className="relative h-[89%] aspect-square  ">
                      <Image
                        src={`${process.env.DEV_FILESERVER_URL}${singleImg.img}`}
                        alt=""
                        className="object-contain"
                        fill
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          



            {/* TEXT CONTAINER */}
            <div className="relative lg:w-3/5 h-fit flex flex-col gap-4  lg:justify-start  mt-4 mb-16 lg:mt-0 p-6  border border-white border-opacity-20  bg-[#221e22]/80 backdrop-blur rounded-xl">
              {/* <h3 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h3> */}
              <h2 className="relative text-xl font-bold lg:text-2xl text-[#edf048]">Project information</h2>
              {/* <p>{singleProduct.desc}</p>
              <p>{singleProduct.desc}</p>
              <p>{singleProduct.desc}</p>
              <p>{singleProduct.desc}</p> */}

              {/* <h3>xxx  xxx</h3> */}
                {singleDescProduct.map((desc, index) => (
                  <div key={index} className='flex flex-col gap-2 lg:gap-2'>
                    {/* <h3>{desc.id}</h3> */}
                    {/* <h3>{desc.class}</h3> */}
                    <p className='pl-2 text-md font-bold px-2 py-1 mb-2 w-fit   bg-[#3e373e] rounded-md'>{desc.cat}</p>
                    <p className='flex flex-wrap gap-4'>{desc.tool.split("|").map((tName, idx) => (
                      <p key={idx} >
                        {/* {idx} {tName}  */}
                        {/* <div className='relative w-8 h-8 '><Image src="/images/interest/python.svg" fill alt="" /> </div> */}

                        <div className='relative w-8 h-8   has-tooltip' >  
                        {tName !== null 
                          ? <div>
                              <Image src={`${process.env.DEV_FILESERVER_URL}/pfolio-fileserver/logo-${tName.toLowerCase()}-ddd.svg`} fill alt="" />
                              <span className='tooltip rounded shadow-lg p-2 bg-[#0F0D0F] text-[#edf048] -mt-10 '>{tName}</span>
                            </div>
                          : <Image src="/images/interest/python.svg" fill alt="" />
                        }
                        </div>

                      </p>))}
                    </p>
                    


                    {/* <h3>{desc.release}</h3>
                    <h3>{desc.url}</h3>
                    <h3>{desc.github}</h3>
                    <h3>{desc.desc}</h3>
                    <h3>{desc.abstract}</h3>
                    <h3>{desc.titleSlug}</h3> */}
                    {/* <ul>
                      <li><strong>Category</strong>: Web Service</li>
                      <li><strong>Release date</strong>: 01 March, 2020</li>
                      <li><strong>GitHub URL</strong>: <a href="https://github.com/XCEVOR/final-dalrun-back" target="_blank">https://github.com/XCEVOR/final-dalrun-back</a></li>
                      <li><strong>GitHub URL</strong>: <a href="https://github.com/XCEVOR/final-dalrun-front" target="_blank">https://github.com/XCEVOR/final-dalrun-front</a></li>
                      <li><strong>Description</strong>: 러너들을 위한 정보 및 편의성을 위한 웹서비스</li>
                    </ul> */}
                    <div className='flex flex-col gap-2 lg:gap-4 mt-2'>
                      
                      <div>
                        <strong className='text-lg'>Description:&nbsp; </strong> <p className='text-[#c4c1bc]'>&nbsp;&nbsp;{desc.desc}</p>
                      </div>

                      <div>
                        {!desc.release.includes("~") 
                          ? <strong className='text-lg'>Release date:&nbsp; </strong>
                          : <strong className='text-lg'>Duration:&nbsp; </strong>
                        }
                        <p className='text-[#c4c1bc]'>&nbsp;&nbsp;{desc.release}</p>
                      </div>

                      {desc.url && 
                      <div>
                        <strong className='text-lg'>Project URL:&nbsp; </strong> <p className='text-[#c4c1bc]'>&nbsp;&nbsp;<a href={desc.url} target="_blank" className='text-[#c4c1bc] hover:text-[#edf048] transition-colors duration-300 ease-in-out  truncate  underline'>{desc.url}</a></p>
                      </div>
                      }

                      <div>
                        <strong className='text-lg'>GitHub URL:&nbsp; </strong>
                        {desc.github.split("|").map((ghUrl, idx) => (
                          <p key={idx}>&nbsp;&nbsp;<a href={ghUrl} target="_blank" className='text-[#c4c1bc] hover:text-[#edf048] transition-colors duration-300 ease-in-out  truncate  underline'>{ghUrl}</a></p>
                        ))}
                      </div>

                      {desc.detailednoteurl && 
                      <div className='flex flex-row items-baseline'>
                        <strong className='text-lg'>Detailed technical notes:&nbsp; </strong>
                        <a href={desc.detailednoteurl} target="_blank" className='text-[#c4c1bc] hover:text-[#edf048] transition-colors duration-300 ease-in-out  truncate  underline'>🗎 PDF File Link 🡽</a>
                      </div>
                      }

                    </div>

                    <div className='flex flex-col gap-3 mt-4 p-4   border-t border-white border-opacity-40'>
                      {desc.abstract.split("|").map((abText, idx) => (
                        <p key={idx} className='text-[#c4c1bc]'>{abText}</p>
                      ))}
                    </div>

                    
                  </div>
                
                ))}
              {/* <h3>xxx  xxx</h3> */}


              {/* <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/> */}

              {/* <PfolioImage /> */}
              {/* <PfolioImage params={{ id: params.id, titleSlug: singleProduct.title }} /> */}
            </div>
            {/* <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
              <PfolioImage params={{ id: params.id, titleSlug: singleProduct.title }} />
            </div> */}
          </div>


          </div>
        </PageWrapper>



        <div>
          
        </div>



        {/* <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#edf048] md:flex-row md:gap-8 md:items-center"> */}
        <div className='relative flex flex-col  w-[90vw] lg:max-w-[80rem] '>

          <ProductReview params={{ id: params.id, titleSlug: singleProduct.title }} />

          {/* <img src="https://picsum.photos/1920/1080" alt="" className="object-contain max-w-4xl"/> */}
          <ProductImages params={{ id: params.id, titleSlug: singleProduct.title }} />

        </div>

      </div>

      <Footer />
    </>
  )
}

export default ProjectPost