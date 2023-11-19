import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './_componenets/Footer/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nijitracker - Nijisanji Subscriber Tracker',
  description: 'Nijitracker, historical subscriber data for members of Nijisanji',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Footer />
      </body>
    </html>
  )
}
