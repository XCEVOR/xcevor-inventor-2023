import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import { menu, pizzas } from '@/data/dummyData';
import BackgroundImage from '@/components/BackgroundImage';
import { CategoriesType } from '@/types/types';


const getData = async () => {
  // console.log(" @@@@@@@@@@ asdfasdfasdf")

  const dbServerUrl = process.env.DEV_DBSERVER_URL || "http://localhost:3000";
  const res = await fetch(`${dbServerUrl}/api/categories`, {
    cache:"no-store"
  });

  if (!res.ok) { throw new Error("Failed!"); }

  return res.json();
}

const CategoriesPage = async () => {

  const categories = [
    {
      id: 'clmrfqd930000ua8k3on07c5v',
      createdAt: '2023-09-20 07:41:08.632',
      title: 'UPDATE aaa',
      desc: 'aaaaa',
      color: 'white',
      img: 'img/pfolio/02.png',
      slug: 'web'
    },
    {
      id: 'clmrfr1g20001ua8kucj6jwns',
      createdAt: '2023-09-20 07:41:39.987',
      title: 'UPDATE bbb',
      desc: 'bbbbb',
      color: 'black',
      img: 'img/pfolio/03.png',
      slug: 'app'
    },
    {
      id: 'clmrfry7r0003ua8khvbqs8yw',
      createdAt: '2023-09-20 07:42:22.455',
      title: 'UPDATE ccc',
      desc: 'ccccc',
      color: 'white',
      img: 'img/pfolio/04.png',
      slug: 'etc'
    }
  ];

  // const categories:CategoriesType = await getData();
  // console.log("  console.log(data);   :   " + categories);

  
  // try {
  //   const data = await getData();
  //   // 데이터를 사용하는 코드 작성
  //   console.log("  console.log(data);" + data);
  // } catch (error) {
  //   // 에러 처리 코드 작성
  //   console.error(error);
  // }
  
  

  return (
    <>
    <BackgroundImage />

    {/* <div className='flex text-[#edf048]'>
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
    


    <div>
    {categories.map((cat, index) => (
      <h2 key={index}>{cat.id}</h2>
    ))}
    </div>


    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
     {categories.map((category) => (
        <Link
          href={`/categories/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h2 className="uppercase font-bold text-3xl">{category.title}</h2>
            <p className="text-sm my-8">{category.desc}</p>
            <button className={`hidden 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>

    </>
  )
}

export default CategoriesPage