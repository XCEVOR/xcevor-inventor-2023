import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import FixedNavbar from '@/components/navbar/FixedNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HOCHAN Portfolio',
  description: 'This is a space to express Hochan’s portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='text-[#F7F3ED]'>
          <FixedNavbar />
          {/* <Navbar /> */}
          {children}
        </div>
      </body>
    </html>
  )
}
