import React from 'react'
import type { Metadata } from 'next'
import { ThemeContext } from '@/lib/theme'
import './globals.css'
import { Roboto_Mono, Rubik, Poppins } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400'], subsets: ['latin'] })
const robotoMono = Roboto_Mono({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Damian O'Connor`,
  description: `Front End Developer`,
}

type RootLayoutProps = { children: React.ReactNode }
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className && rubik.className && robotoMono.className} suppressHydrationWarning>
        <ThemeContext>
          {children}
        </ThemeContext>
      </body>
    </html>
  )
}
