
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Creador de cuentos de Ciencia Ficción | Historias del futuro con IA',
  description: 'Descubre historias únicas de ciencia ficción sobre tecnologías emergentes. Un contador de cuentos impulsado por inteligencia artificial que crea narrativas personalizadas del futuro.',
  keywords: 'ciencia ficción, cuentos, historias, inteligencia artificial, IA, tecnologías emergentes, narrativas del futuro, español',
  authors: [{ name: 'Creador de cuentos de Ciencia Ficción' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Creador de cuentos de Ciencia Ficción',
    description: 'Descubre historias únicas de ciencia ficción sobre tecnologías emergentes impulsadas por IA.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creador de cuentos de Ciencia Ficción',
    description: 'Historias del futuro impulsadas por inteligencia artificial',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
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
