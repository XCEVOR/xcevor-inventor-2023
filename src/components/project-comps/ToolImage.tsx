"use client";

import Image from 'next/image';
import { useState } from 'react';


type tNameType = {
  tName: string,
}

export default function ToolImage({ tName } : tNameType) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className='relative w-8 h-8'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && <span style={{ position: 'absolute', right: '1rem' }}>{tName}</span>}
      {tName !== null 
        ? <Image src={`${process.env.DEV_FILESERVER_URL}/pfolio-fileserver/logo-${tName}-ddd.svg`} fill alt="" />
        : <Image src="/img/interest/python.svg" fill alt="" />
      }
    </div>
  );
}


// <p className='flex flex-row gap-4'>{desc.tool.split("/").map((tName, idx) => (
//   <p key={idx}>
//     {idx} {tName}
//     <ToolImage tName={tName} />
//   </p>
// ))}
// </p>
