import type { Metadata } from 'next'
import { JsonLd } from '@/components/jsonLd'

export const metadata: Metadata = {
  title: 'Mikeq95 Blog - About',
  description: 'Think independently, and distiguish right from wrong.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mengyang Yang',
    url: 'https://mengyangblog.page',
    jobTitle: 'Electronic Information Engineering Student',
    description:
      'An Electronic Information Engineering student who enjoys programming and building software with modern web technologies.',
    knowsAbout: [
      'C',
      'C++',
      'Swift',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
    ],
  }

  return (
    <>
      <JsonLd data={personJsonLd} />
      {children}
    </>
  )
}
