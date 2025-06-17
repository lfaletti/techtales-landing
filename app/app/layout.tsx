
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechTales Storyteller | Contador de Cuentos de Ciencia Ficción',
  description: 'A bilingual science fiction storyteller chatbot that creates unique stories about emerging technologies. Un contador de cuentos de ciencia ficción bilingüe que crea historias únicas sobre tecnologías emergentes.',
  keywords: 'science fiction, storyteller, chatbot, AI, emerging technologies, bilingual, English, Spanish, sci-fi stories',
  authors: [{ name: 'TechTales' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'TechTales Storyteller | Contador de Cuentos de Ciencia Ficción',
    description: 'A bilingual science fiction storyteller chatbot that creates unique stories about emerging technologies.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechTales Storyteller',
    description: 'A bilingual science fiction storyteller chatbot',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

