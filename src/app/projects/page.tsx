import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import { menu, pizzas } from '@/data/dummyData';
import BackgroundImage from '@/components/BackgroundImage';
import { ProductType } from '@/types/types';
import { PageWrapper } from '@/components/framer-motion/page-wrapper';
import { Reveal } from '@/utils/Reveal';



const getData = async () => {
  console.log(" @@@@@@@@@@ const Portfolio = async () ")
  const res = await fetch("http://localhost:3000/api/products",{
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

      <PageWrapper>
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
        
        <div className='flex px-1 md:px-20 items-center justify-center  '>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 w-full xl:max-w-fit">
            {featureProducts.map((item, index) => (
              <Reveal mydelay={1.5 * (1 + 0.4 * index)} >
              <div className='sm:p-8'>

                <Link className="w-fit h-[90vw] md:max-h-[80vw] lg:max-h-[30vw] aspect-square border-r-2 border-b-2 border-[#F8EFE4]/[2%]  flex flex-col justify-between group" href={`/portfolio/${item.id}`} key={item.id}> 

                  {/* IMAGE CONTAINER */}
                  {item.img && (
                    <div className="relative flex items-center justify-center h-full">
                      <div className="relative flex items-center justify-center h-[90%] aspect-square rounded-3xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-200 border-opacity-10 transition-all duration-700 hover:scale-105">
                        <div className="relative h-[86%] aspect-square rounded-2xl overflow-hidden">
                          <Image src={`${process.env.DEV_FILESERVER_URL}${item.img}`} alt="" fill className="object-contain aspect-square"/>
                          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center bg-[#282120]/[90%] text-2xl text-[#F8EFE4] font-semibold">
                            <div className='flex flex-col items-center justify-center'>
                              <p>{item.title}</p>
                              <p className='mt-2 text-[1rem]'>{item.catSlug.toUpperCase()}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <div className="relative h-[80%]">
                    <img src="https://picsum.photos/800" alt="" className="object-contain"/>
                    
                  </div> */}


                  {/* TEXT CONTAINER */}
                  <div className="flex items-center justify-between font-bold">
                    {/* <h1 className="text-2xl uppercase p-2">{item.title}</h1> */}
                    {/* <h2 className="group-hover:hidden text-xl">${item.price}</h2> */}
                    {/* <button className="hidden group-hover:block uppercase bg-[#FAD02C] text-[#F8EFE4] p-2 rounded-md">Add to Cart</button> */}
                  </div>
                
                </Link>

              </div>
              </Reveal>
            ))}
          </div>
        </div>

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
    </>
  )
}

export default Portfolio