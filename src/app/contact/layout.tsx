import type { Metadata } from 'next'
import { JsonLd } from '@/components/jsonLd'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch',
  openGraph: {
    title: 'Contact',
    description: 'Get in touch',
  },
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact',
  description: 'Contact page',
  mainEntity: {
    '@type': 'Person',
    name: 'Mengyang Yang',
    email: 'giffgaffuk78459@icloud.com',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      {children}
    </>
  )
}
