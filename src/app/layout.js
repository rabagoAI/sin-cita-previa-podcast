import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import podcastsConfig from '../../config/podcasts.json'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const podcast = podcastsConfig['sin-cita-previa-salud-en-la-mujer']

export const metadata = {
  title: podcast.title,
  description: podcast.description,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#0a0510] text-white antialiased`}>
        <Navbar podcast={podcast} />
        <main>{children}</main>
        <Footer podcast={podcast} />
      </body>
    </html>
  )
}
