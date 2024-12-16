import { ReactNode } from 'react';
import '/node_modules/@fortawesome/fontawesome-free/css/all.css';
import '/node_modules/@awesome.me/kit-26a319aa6f/icons/css/all.min.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "@/assets/scss/globals.scss"
import BaseLayout from '@/app/components/BaseLayout';
import { Metadata } from 'next';
type Props = { children: ReactNode };
export const metadata: Metadata = {
  metadataBase: new URL('https://aerostar-aviation.com/'),
  title: {
    template: "%s | ASAS",
    default: "Aero Star Aviation Services"
  },
  description: 'Aero Star Aviation Services is a pioneering ground handling provider in Egypt, dedicated to delivering unparalleled services to airlines and private jets. By embracing innovation and prioritizing customer satisfaction, we offer efficient, reliable, and personalized solutions.',
  generator: 'Next.js',
  applicationName: 'Aero Star Aviation Services',
  referrer: 'origin-when-cross-origin',
  keywords: ['Aviations Services', 'Egypt', 'Airports'],
  creator: 'NSAS Tourism',
  alternates: {
    canonical: '/',
    languages: {'en-US': '/en-US',},
  },
  openGraph: {
    images: 'https://admin.aerostar-aviation.com/wp-content/uploads/2024/12/og-image.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return <BaseLayout>{children}</BaseLayout>;
}