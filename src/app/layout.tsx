import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ViewTransitionWrapper } from '@/components/viewTransitionWrapper'
import { Providers } from './providers'
import '@/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F9F5F1' },
    { media: '(prefers-color-scheme: dark)', color: '#282828' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Mikeq95 Blog',
    template: '%s | Mikeq95 Blog',
  },
  metadataBase: new URL('https://mengyangblog.page'),
  description: "Mengyang Yang's personal blog about programming and technology",
  authors: [{ name: 'Mengyang Yang' }],
  creator: 'Mengyang Yang',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mengyangblog.page',
    siteName: 'Mikeq95 Blog',
    title: 'Mikeq95 Blog',
    description:
      "Mengyang Yang's personal blog about programming and technology",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mikeq95 Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikeq95 Blog',
    description:
      "Mengyang Yang's personal blog about programming and technology",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col antialiased`}
      >
        <Providers>
          <Header />
          <main className="flex-grow">
            <ViewTransitionWrapper>{children}</ViewTransitionWrapper>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
