import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Suhan Creatives - Design & Development Studio',
  description: 'Professional graphic design, mobile app development, and website development services',
  keywords: 'graphic design, mobile app development, web development, UI/UX design, digital agency',
  openGraph: {
    title: 'Suhan Creatives - Design & Development Studio',
    description: 'Professional graphic design, mobile app development, and website development services',
    type: 'website',
    locale: 'en_US',
    url: 'https://suhancreatives.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suhan Creatives - Design & Development Studio',
    description: 'Professional graphic design, mobile app development, and website development services',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#fbbf24" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
        <Script 
          id="smooth-scroll"
          strategy="afterInteractive"
        >
          {`
            window.addEventListener('load', () => {
              import('@/lib/smoothScroll').then(module => {
                module.initSmoothScroll();
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}