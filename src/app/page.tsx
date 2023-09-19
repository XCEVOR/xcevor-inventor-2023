import Image from 'next/image'

import BackgroundImage from '@/components/BackgroundImage';


export default function Home() {
  return (
    <>
    <BackgroundImage />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hollo!!</h1>
    </main>
    </>
  )
}
