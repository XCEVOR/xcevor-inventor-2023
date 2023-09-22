import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import { menu, pizzas } from '@/data/dummyData';
import BackgroundImage from '@/components/BackgroundImage';
import { ProductType } from '@/types/types';
import { PageWrapper } from '@/components/framer-motion/page-wrapper';



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
        {/* <div className='flex text-[#ffbf00]'>
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
        

        <div className="flex flex-wrap text-[#ffbf00]">
          {featureProducts.map((item) => (

            // REMOVED odd:bg-fuchsia-50
            <Link className="w-full h-[60vh] border-r-2 border-b-2 border-[#ffbf00] sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group" href={`/portfolio/${item.id}`} key={item.id}> 
              {/* IMAGE CONTAINER */}
              {item.img && (
                <div className="relative h-[80%]">
                  <Image src={`${process.env.DEV_FILESERVER_URL}${item.img}`} alt="" fill className="object-contain"/>
                </div>
              )}
              {/* <div className="relative h-[80%]">
                <img src="https://picsum.photos/800" alt="" className="object-contain"/>
                
              </div> */}

              {/* TEXT CONTAINER */}
              <div className="flex items-center justify-between font-bold">
                <h1 className="text-2xl uppercase p-2">{item.title}</h1>
                <h2 className="group-hover:hidden text-xl">${item.price}</h2>
                <button className="hidden group-hover:block uppercase bg-[#ffbf00] text-white p-2 rounded-md">Add to Cart</button>
              </div>
            </Link>
          ))}
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