import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import footer from '../components/Footer'
import Navbar from '@/components/NavBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Samuel',
  description: 'Creating magical experiences on the web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      <footer />
    </html>
  )
}
