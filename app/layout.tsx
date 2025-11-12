import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import WhatsAppFloat from './components/WhatsAppFloat/index';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AloIT Consultant - Leading IT Solutions & Cybersecurity Services',
  description: 'AloIT Consultant delivers innovative technology consulting, digital transformation services, and cutting-edge cybersecurity solutions. Protect your business with our comprehensive IT security, compliance, and risk management expertise.',
  keywords: 'IT consulting, cybersecurity, digital transformation, IT solutions, security services, compliance, risk management, nIAM, nAMS, nBsuits, nISMA, nBoard, nERIM',
  authors: [{ name: 'AloIT Consultant' }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'AloIT Consultant - Leading IT Solutions & Cybersecurity Services',
    description: 'Delivering innovative technology consulting and digital transformation services with cutting-edge cybersecurity expertise.',
    url: 'https://aloitconsultant.com',
    siteName: 'AloIT Consultant',
    images: [
      {
        url: '/aloitonlyicon.jpeg',
        width: 1200,
        height: 630,
        alt: 'AloIT Consultant Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AloIT Consultant - Leading IT Solutions & Cybersecurity Services',
    description: 'Delivering innovative technology consulting and digital transformation services with cutting-edge cybersecurity expertise.',
    images: ['/aloitonlyicon.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
