import Image from 'next/image'

import BackgroundImage from '@/components/BackgroundImage';
import { PageWrapper } from '@/components/framer-motion/page-wrapper';


export default function Home() {
  return (
    <>
      <BackgroundImage />

      <PageWrapper>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>Hollo!!</h1>
        </main>
      </PageWrapper>
    </>
  )
}
