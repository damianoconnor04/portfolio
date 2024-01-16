import React from 'react'
import type { Metadata } from 'next'
import { ThemeContext } from '@/lib/theme'
import './globals.css'
import { Rubik } from 'next/font/google'
import { Poppins } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Damian O'Connor`,
  description: `Front End Developer`,
}

type RootLayoutProps = { children: React.ReactNode }
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className && rubik.className}>
        <ThemeContext>
          {children}
        </ThemeContext>
      </body>
    </html>
  )
}
